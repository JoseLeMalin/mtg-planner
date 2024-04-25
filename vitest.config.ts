import react from "@vitejs/plugin-react";
import { resolve } from "path";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: [{ find: "@", replacement: resolve("./") }]

  },
  test: {
    environment: "jsdom",
    include: ["./__tests__/*.{test,spec}.?(c|m)[jt]s?(x)"],
    // include: [
    //   "./__tests__/*.{test,spec}.?(c|m)[jt]s?(x)",
    //   "./__tests__/**/*.{test,spec}.?(c|m)[jt]s?(x)",
    // ],
    exclude: ["**/node_modules/**", "./prisma/*", "./.next/*", "./config/*"],
  },
});
