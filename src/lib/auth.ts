import {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";
import { ISODateString, getServerSession } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { NextAuthOptions } from "next-auth";
import { env } from "./env";
import { Adapter } from "next-auth/adapters";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "src/lib/prisma";

type ParametersGetServerSession =
  | []
  | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
  | [NextApiRequest, NextApiResponse];
/**
 * Update the Default Interfaces that next-auth/sequelize work with
 */
// declare module "next-auth" {
//   interface User {
//     /** The user's postal address. */
//     id: string;
//     name: string;
//     address: string;
//     email: string;
//     emailVerified: Date;
//   }
//   interface Session {
//     user: {
//       id: string;
//       name?: string | null;
//       email?: string | null;
//       image?: string | null;
//     };
//     expires: ISODateString;
//   }
// }

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter, // Git issue https://github.com/nextauthjs/next-auth/issues/9493,
  providers: [
    GithubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      console.log("Do we reach here jwt token?", token);
      console.log("Do we reach here jwt account?", account);
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async redirect({ url, baseUrl }) {
      console.log("Do we reach here redirect?", url, baseUrl);
      console.log(
        "new URL(url).origin === baseUrl",
        new URL(url).origin === baseUrl,
      );
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      console.log("Do we reach here redirect?", url, baseUrl);
      return baseUrl;
    },
    async session({ session, user, token, trigger }) {
      console.log("Do we reach here session session?", session);
      console.log("Do we reach here session user?", user);
      console.log("Do we reach here session token?", token);

      if (!token?.sub || !token?.picture)
        throw new Error("Missing !token?.sub || !token?.picture");
      session.user.id = token.sub;
      session.user.image = token.picture;
      return session;
    },
    async signIn({ user, account, profile, email, credentials }) {
      console.log("Do we reach here signin?");
      const isAllowedToSignIn = true;
      if (isAllowedToSignIn) {
        return true;
      } else {
        return false;
      }
    },
  },
  // pages: {
  //   signIn: "/auth/signin",
  //   signOut: "/auth/signout",
  //   error: "/auth/error", // Error code passed in query string as ?error=
  //   verifyRequest: "/auth/verify-request", // (used for check email message)
  //   newUser: "/auth/new-user",
  // },
  session: {
    strategy: "jwt",
  },
};

/**
 * Get server session of user
 * @param parameters 
 * @returns 
 */
export const getAuthSession = async (
  ...parameters: ParametersGetServerSession
) => {
  const session = await getServerSession(...parameters, authOptions);
  return session;
};
export const getRequiredAuthSession = async (
  ...parameters: ParametersGetServerSession
) => {
  const session = await getServerSession(...parameters, authOptions);
  if (!session?.user.id) {
    throw new Error("Unauthorized");
  }
  return session as {
    user: {
      id: string;
      email?: string;
      image?: string;
      name?: string;
    };
  };
};
