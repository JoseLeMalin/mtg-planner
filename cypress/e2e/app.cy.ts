


describe("Navigation", () => {
  beforeEach(() => {
    // Start from the index page
    cy.visit("/");
  });
  it("should check if event button is shown and active", () => {
    cy.get("button").should("be.visible").should("be.enabled");
  });
  it("should connect using Github Social OAuth", () => {
    cy.loginToAuth0ViaSocial("github")
  });
  // it("should render and display expected content", () => {
  //   // Mount the React component for the Home page
  //   // cy.mount(<StatsCard />)
  //   cy.get('button[type=button]').contains("Events").as('eventsBtn')
  //   cy.get('@eventsBtn').click().should('be.enabled')
  // });
});
