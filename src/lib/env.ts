import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

// Please follow the docs : https://env.t3.gg/docs/nextjs#create-your-schema
export const env = createEnv({
  /*
   * Serverside Environment variables, not available on the client.
   * Will throw if you access these variables on the client.
   */
  server: {
    NODE_ENV: z.enum(["development", "production", "staging"]),
    DATABASE_URL: z.string().url(),
    GITHUB_ID: z.string(),
    GITHUB_SECRET: z.string(),
    NEXTAUTH_URL: z.string(),
    NEXTAUTH_SECRET: z.string(),
    OPEN_AI_API_KEY: z.string(),
  },

  /*
   * Environment variables available on the client (and server).
   *
   * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
   */
  client: {
    // Nothing here yet
  },

  /*
   * Due to how Next.js bundles environment variables on Edge and Client,
   * we need to manually destructure them to make sure all are included in bundle.
   *
   * 💡 You'll get type errors if not all variables from `server` & `client` are included here.
   */
  // runtimeEnv: {},

  // Maybe you can use just `runtimeEnv` if there is a MAJ.
  experimental__runtimeEnv: {},
});
