import { defineConfig } from "cypress";
import { plugins } from "cypress-social-logins"


export default defineConfig({
  experimentalModifyObstructiveThirdPartyCode: true,
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // https://docs.cypress.io/guides/tooling/plugins-guide#Using-a-plugin
      on("task", {
        // GoogleSocialLogin: plugins.GoogleSocialLogin(),
        GitHubSocialLogin: plugins.GitHubSocialLogin,
      });
    },
    baseUrl: "http://localhost:3000",
    // supportFile: false,
  },
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
