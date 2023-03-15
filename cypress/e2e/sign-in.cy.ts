describe("sign in page", () => {
  beforeEach(() => {
    cy.visit("/sign-in");
  });
  it("should render page properly", () => {
    cy.getByData("google-provider-button").contains("Continue with Google");
    cy.get("h1").contains("Sign In");
  });
  it("should sign in with google", () => {
    cy.getByData("google-provider-button")
      .contains("Continue with Google")
      .click();
    cy.contains("button", "Google").should("be.disabled");
  });
});
