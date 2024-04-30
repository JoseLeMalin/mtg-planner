declare namespace Cypress {
  interface Chainable<Subject> {
    loginViaAuth0Ui(username: string, password: string): Chainable<Subject>; // <== "loginViaAuth0Ui" has to be the same name and parameters as the command we want to add
    loginToAuth0ViaSocial(SOCIAL_PROVIDER: string): Chainable<Subject>; // <== "loginToAuth0ViaSocial" has to be the same name and parameters as the command we want to add
  }
}
