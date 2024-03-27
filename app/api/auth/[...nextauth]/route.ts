import { env } from "src/lib/env";
import NextAuth, { AuthOptions, ISODateString } from "next-auth";
import SequelizeAdapter from "@auth/sequelize-adapter";
import { Sequelize } from "sequelize";
import { Adapter } from "next-auth/adapters";
import GithubProvider from "next-auth/providers/github";
import pg from "pg";

/**
 * Update the Default Interfaces that next-auth/sequelize work with
 */
declare module "next-auth" {
  interface User {
    /** The user's postal address. */
    id: string;
    name: string;
    address: string;
    email: string;
    emailVerified: Date;
  }
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
    expires: ISODateString;
  }
}

// https://sequelize.org/master/manual/getting-started.html#connecting-to-a-database
// const sequelize = new Sequelize(env.DATABASE_URL);
const sequelize = new Sequelize(env.DATABASE_URL, {
  dialect: "postgres",
  dialectModule: pg,
});
if (env.NODE_ENV === "development") {
  sequelize.sync();
}

// For more information on each option (and a full list of options) go to
// https://authjs.dev/reference/core#authconfig
// export default NextAuth({
export const authOptions: AuthOptions = {
  // https://authjs.dev/reference/providers/
  adapter: SequelizeAdapter(sequelize) as Adapter, // Git issue https://github.com/nextauthjs/next-auth/issues/9493,
  secret: env.NEXTAUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    async session({ session, user, token, trigger }) {
      if (!token?.sub || !token?.picture)
        throw new Error("Missing !token?.sub || !token?.picture");

      session.user.id = token.sub;
      session.user.image = token.picture;
      return session;
    },
    async signIn({ user, account, profile, email, credentials }) {
      const isAllowedToSignIn = true;
      if (isAllowedToSignIn) {
        return true;
      } else {
        return false;
      }
    },
  },
  session: {
    strategy: "jwt",
  },
};



const handler = NextAuth(authOptions);
export default NextAuth(authOptions);
export { handler as GET, handler as POST };