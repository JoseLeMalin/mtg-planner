describe("1.1- Sign in with Github", function () {
  it("1.1.1- Sign in with Github Sample Test", () => {
    cy.visit("/");
    cy.get("id=comp-btn-signin").click();
    cy.contains("Login").click();
    cy.get('[data-testid="login-page-sign-in-with-github"]').click();

    cy.origin("https://github.com", () => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        console.log("Error happened here", err);

        return false;
      });

      cy.get('[id="login_field"]').type("test98@gmail.com");
      cy.get('[id="password"]').type("test@1234");
      cy.get('[class="btn btn-primary btn-block js-sign-in-button"]').click();

      Cypress.on("uncaught:exception", (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false;
      });
    });

    cy.wait(1000);
  });
});
