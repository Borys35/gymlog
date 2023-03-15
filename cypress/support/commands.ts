/// <reference types="cypress" />

Cypress.Commands.add("getByData", (selector: string) => {
  return cy.get(`[data-test='${selector}']`);
});

Cypress.Commands.add("signIn", () => {
  cy.intercept("/api/auth/session", { fixture: "session.json" }).as("session");

  cy.setCookie("next-auth.session-token", Cypress.env("SESSION_TOKEN"));
  cy.setCookie(
    "__Secure-next-auth.session-token",
    Cypress.env("SESSION_TOKEN"),
    { secure: true }
  );
});

declare namespace Cypress {
  interface Chainable {
    getByData(selector: string): Chainable<JQuery<HTMLElement>>;
    signIn(): void;
  }
}
