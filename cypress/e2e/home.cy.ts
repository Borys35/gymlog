describe("home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should render properly", () => {
    cy.get("h1").contains("Log, Track, and Progress");
    cy.getByData("button")
      .contains("a", "Get started")
      .invoke("attr", "href")
      .should("contain", "/sign-in")
      .then((href) => {
        if (href) cy.request(href).its("status").should("eq", 200);
      });
  });
});
