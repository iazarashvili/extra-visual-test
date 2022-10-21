import selector from "../../support/selectors.js";
import users from "../../fixtures/users";

describe("Extra user pages", function () {
  beforeEach("first settings", function () {
    cy.viewport(1920, 1080);
    cy.visit(Cypress.env("base_url"));
    cy.wait(2000);
    cy.authorization(users.email, users.password);
    cy.wait(3000);
  });
  it("Case 1: User orders page", function () {
    cy.visit(Cypress.env("profile_orders"));
    cy.wait(4000);
    cy.url().should("include", "user/profile/orders");
    cy.get(selector.elements.closeCookie()).click();
    cy.percySnapshot("User orders page");
    cy.get("i._x_icon-arrow-right:eq(0)").click({ force: true });
    cy.wait(1000);
    //cy.get(selector.elements.closeCookie()).click();
    cy.percySnapshot("Order Detail");
  });

  it("Case 2: User profile page", function () {
    cy.visit(Cypress.env("profile_data"));
    cy.wait(4000);
    cy.get(selector.elements.closeCookie()).click();
    cy.percySnapshot("User profile page");
  });

  it("Case 3: My cards page", function () {
    cy.visit(Cypress.env("profile_my_cards"));
    cy.wait(4000);
    cy.get(selector.elements.closeCookie()).click();
    cy.percySnapshot("My cards page");
  });

  it("Case 4: Balance page", function () {
    cy.visit(Cypress.env("profile_balance"));
    cy.wait(4000);
    cy.get(selector.elements.closeCookie()).click();
    cy.percySnapshot("Balance page");
  });

  it("Case 5: Security page", function () {
    cy.visit(Cypress.env("profile_security"));
    cy.wait(4000);
    cy.get(selector.elements.closeCookie()).click();
    cy.percySnapshot("Security page");
  });
});
