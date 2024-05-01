import { plugins } from "cypress-social-logins"
import { GitHubSocialLogin } from "cypress-social-logins/src/Plugins";
// const { GoogleSocialLogin,  } = require("cypress-social-logins").plugins;



module.exports = (on, config) => {
  on("task", {
    // GoogleSocialLogin: plugins.GoogleSocialLogin(),
    GitHubSocialLogin: plugins.GitHubSocialLogin,
  });
};
