// https://docs.cypress.io/api/introduction/api.html

describe("Views render", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "WeMusic");
  });
  it("toggles all nav links and they render", () => {
    cy.visit("/");
    cy.get(".nav__item").then(async users => {
      users[0].click();
      users[1].click();
      users[2].click();
    });
  });
  it("albums search filter input", () => {
    cy.visit("/.albums");
    cy.get(".nav__item").then(async users => {
      users[0].click();
      users[1].click();
      users[2].click();
    });
  });
});
