import users from "../../fixtures/users";
import selector from "../../support/selectors";

describe("Extra Home Page Visual Tests", function () {
  beforeEach("first settings", function () {
    cy.viewport(1920, 1080);
    cy.visit(Cypress.env('base_url'));
    cy.get(selector.elements.closeCookie()).click();
    cy.wait(3000);
  });
  it("Case 1: Home page", function () {
    cy.url().should("include", Cypress.env('base_url'));
    cy.percySnapshot("Home page");
  });
  it("Case 2: Open Sign in form", function () {
    cy.contains("შესვლა");
    cy.wait(2000);
    cy.percySnapshot("Open Sign in form");
  });
  it("Case 3: Empty basket page", function () {
    cy.contains("კალათა").click();
    cy.wait(2000);
    cy.percySnapshot("Empty basket page");
  });
  it("Case 4: Burger menu", function () {
    cy.get("button i._x_icon-burger:eq(1)").click({ force: true });
    cy.wait(3000);
    cy.percySnapshot("Burger menu");
  });
  it("Case 5: Photo search form", function () {
    cy.get("button i._x_icon-camera:eq(0)").click();
    cy.wait(2000);
    cy.percySnapshot("Photo search form");
  });
  it("Case 6: Footer", function () {
    cy.scrollTo("bottom", { duration: 1000 });
    cy.wait(2000);
    cy.percySnapshot("Footer");
  });

  it("Case 7: Wishlist page", function () {
    cy.authorization(users.email, users.password);
    cy.wait(3000);
    cy.contains("შენახული").click();
    cy.wait(3000);
    cy.percySnapshot("Wishlist page");
  });
});
