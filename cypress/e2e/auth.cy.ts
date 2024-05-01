// https://dev.to/ashfaq1998data/social-login-using-cypress-1270-5hk7

// describe("1.1- Sign in with Github", function () {
//   it("1.1.1- Sign in with Github Sample Test", () => {
//     cy.visit("/");
//     cy.get("id=comp-btn-signin").click();
//     cy.contains("Login").click();
//     cy.get('[data-testid="login-page-sign-in-with-github"]').click();
//
//     cy.origin("https://github.com", () => {
//       Cypress.on("uncaught:exception", (err, runnable) => {
//         // returning false here prevents Cypress from
//         // failing the test
//         console.log("Error happened here", err);
//
//         return false;
//       });
//
//       cy.get('[id="login_field"]').type("test98@gmail.com");
//       cy.get('[id="password"]').type("test@1234");
//       cy.get('[class="btn btn-primary btn-block js-sign-in-button"]').click();
//
//       Cypress.on("uncaught:exception", (err, runnable) => {
//         // returning false here prevents Cypress from
//         // failing the test
//         return false;
//       });
//     });
//
//     cy.wait(1000);
//   });
// });

// https://next-auth.js.org/tutorials/testing-with-cypress
describe("Login page", () => {
  before(() => {
    cy.log(`Visiting homepage`);
    cy.visit("/");
  });
  it("Login with Github", () => {
    cy.log("Cypress.env(GITHUB_USERNAME)", Cypress.env("GITHUB_USERNAME"));
    cy.log("Cypress.env(GITHUB_USERNAME)", Cypress.env("GITHUB_PASSWORD"));

    const username = Cypress.env("GITHUB_USERNAME");
    const password = Cypress.env("GITHUB_PASSWORD");
    const loginUrl = Cypress.env("SITE_NAME");
    const cookieName = Cypress.env("COOKIE_NAME");
    const socialLoginOptions = {
      username,
      password,
      loginUrl,
      headless: true,
      logs: false,
      isPopup: true,
      loginSelector: `[href="${Cypress.env(
        "SITE_NAME",
      )}/api/auth/signin/github"]`,
      usernameField: '#input_username',
      passwordField: '#input_password',
      passwordSubmitBtn: '#login_btn_sign',
      postLoginSelector: ".unread-count",
    };

    return cy
      // .get("#comp-btn-signin")
      // .click()
      .task("GitHubSocialLogin", socialLoginOptions)
      .then(({ cookies }) => {
        cy.clearCookies();

        const cookie = cookies
          .filter((cookie) => cookie.name === cookieName)
          .pop();
        if (cookie) {
          cy.setCookie(cookie.name, cookie.value, {
            domain: cookie.domain,
            expiry: cookie.expires,
            httpOnly: cookie.httpOnly,
            path: cookie.path,
            secure: cookie.secure,
          });

          Cypress.Cookies.defaults({
            preserve: cookieName,
          });

          // remove the two lines below if you need to stay logged in
          // for your remaining tests
          cy.visit("/api/auth/signout");
          cy.get("form").submit();
        }
      });
  });
});
