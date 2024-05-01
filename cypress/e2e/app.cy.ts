describe("Navigation", () => {
  beforeEach(() => {
    // Start from the index page
    cy.visit("/");
  });
  it("should check if event button is shown and active", () => {
    cy.get("button").should("be.visible").should("be.enabled");
  });
});


// describe("Login page", () => {
//   before(() => {
//     cy.log(`Visiting homepage`)
//     cy.visit("/")
//   })
//   it("Login with Github", () => {
//     const username = Cypress.env("GITHUB_USER")
//     const password = Cypress.env("GITHUB_PW")
//     const loginUrl = Cypress.env("SITE_NAME")
//     const cookieName = Cypress.env("COOKIE_NAME")
//     const socialLoginOptions = {
//       username,
//       password,
//       loginUrl,
//       headless: true,
//       logs: false,
//       isPopup: true,
//       loginSelector: `a[href="${Cypress.env(
//         "SITE_NAME"
//       )}/api/auth/signin/github"]`,
//       postLoginSelector: ".unread-count",
//     }//
//     return cy
//       .task("GithubSocialLogin", socialLoginOptions)
//       .then(({ cookies }) => {
//         cy.clearCookies()//
//         const cookie = cookies
//           .filter((cookie) => cookie.name === cookieName)
//           .pop()
//         if (cookie) {
//           cy.setCookie(cookie.name, cookie.value, {
//             domain: cookie.domain,
//             expiry: cookie.expires,
//             httpOnly: cookie.httpOnly,
//             path: cookie.path,
//             secure: cookie.secure,
//           })//
//           Cypress.Cookies.defaults({
//             preserve: cookieName,
//           })//
//           // remove the two lines below if you need to stay logged in
//           // for your remaining tests
//           cy.visit("/api/auth/signout")
//           cy.get("form").submit()
//         }
//       })
//   })
// })
