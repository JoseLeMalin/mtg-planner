/* // cypress/support/auth-provider-commands/auth0.ts
import { domain as Auth0Domain } from "./auth_config.json";

function loginViaAuth0Ui(username: string, password: string) {
  // App landing page redirects to Auth0.
  cy.visit("/");

  // Login on Auth0.
  cy.origin(
    Cypress.env("auth0_domain"),
    { args: { username, password } },
    ({ username, password }) => {
      cy.get("input#username").type(username);
      cy.get("input#password").type(password, { log: false });
      cy.contains("button[value=default]", "Continue").click();
    },
  );

  // Ensure Auth0 has redirected us back to the RWA.
  cy.url().should("equal", "http://localhost:3000/");
}

Cypress.Commands.add(
  "loginViaAuth0Ui", // <== "loginViaAuth0Ui" has to be the same name and parameters as the command we want to add
  (username: string, password: string) => {
    const log = Cypress.log({
      displayName: "AUTH0 LOGIN",
      message: [`🔐 Authenticating | ${username}`],
      // @ts-ignore
      autoEnd: false,
    });
    log.snapshot("before");

    cy.session(
      `auth0-${username}`,
      () => {
        loginViaAuth0Ui(username, password);
      },
      {
        validate: () => {
          // Validate presence of access token in localStorage.
          cy.wrap(localStorage)
            .invoke("getItem", "authAccessToken")
            .should("exist");
        },
      },
    );

    log.snapshot("after");
    log.end();

    // const log = Cypress.log({
    //   displayName: "AUTH0 LOGIN",
    //   message: [`🔐 Authenticating | ${username}`],
    //   // @ts-ignore
    //   autoEnd: false,
    // });
    // log.snapshot("before");
    //
    // loginViaAuth0Ui(username, password);
    //
    // log.snapshot("after");
    // log.end();
  },
);

Cypress.Commands.add("loginToAuth0ViaSocial", (SOCIAL_PROVIDER: string) => {
  const log = Cypress.log({
    displayName: "Social LOGIN",
    message: [`🔐 Authenticating | ${SOCIAL_PROVIDER}`],
    // @ts-ignore
    autoEnd: false,
  });
  log.snapshot("before");

  switch (SOCIAL_PROVIDER) {
    case "github":
      logIntoGithub(
        Cypress.env("GITHUB_USERNAME"),
        Cypress.env("GITHUB_PASSWORD"),
        Cypress.env("GITHUB_NAME"),
      );
      break;
    case "google":
      // logIntoGoogle(
      //   Cypress.env("GOOGLE_USERNAME"),
      //   Cypress.env("GOOGLE_PASSWORD"),
      //   Cypress.env("GOOGLE_NAME"),
      // );
      break;
    case "facebook":
      // logIntoFacebook(
      //   Cypress.env("FACEBOOK_USERNAME"),
      //   Cypress.env("FACEBOOK_PASSWORD"),
      //   Cypress.env("FACEBOOK_NAME"),
      // );
      break;
    default:
      throw new Error("no social provider configured!");
  }

  log.snapshot("after");
  log.end();
});

export function logIntoGithub(
  username: string,
  password: string,
  name: string,
) {
  cy.visit("http://localhost:3000");
  cy.get("id=header-btn-signin").click();

  cy.origin(Auth0Domain, () => {
    cy.scrollTo("bottom");
    cy.get('form[data-provider="windowslive"]').submit();
  });

  cy.origin(
    "login.live.com",
    {
      args: {
        username,
        password,
      },
    },
    ({ username, password }) => {
      cy.get('input[type="email"]').type(username);
      cy.get('input[type="submit"]').click();
      cy.get('input[type="password"]').type(password, {
        log: false,
      });
      cy.get('input[type="submit"]').click();
      cy.get("#idBtn_Back").click();
    },
  );

  cy.get("h6.dropdown-header").should("contain", name);
}
 */
Cypress.Commands.add("login", () => {
	cy.intercept("/api/auth/session", { fixture: "session.json" }).as("session");

	// Set the cookie for cypress.
	// It has to be a valid cookie so next-auth can decrypt it and confirm its validity.
	// This step can probably/hopefully be improved.
	// We are currently unsure about this part.
	// We need to refresh this cookie once in a while.
	// We are unsure if this is true and if true, when it needs to be refreshed.
	cy.setCookie("next-auth.session-token", "a valid cookie from your browser session");
	Cypress.Cookies.preserveOnce("next-auth.session-token");
});