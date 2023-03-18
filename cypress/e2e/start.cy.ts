describe("start page", () => {
  it("should redirect from the page", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return !err.message.includes("NEXT_REDIRECT");
    });
    cy.visit("/start");
  });
  it("should render the page", () => {
    cy.signIn();
    cy.visit("/start");
    cy.wait("@session");

    cy.getByData("page-tab").eq(0).get("h2").contains("Start Workout");
  });
});
