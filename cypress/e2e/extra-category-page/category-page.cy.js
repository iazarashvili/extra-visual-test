import selector from "../../support/selectors";

describe("Extra category page", function () {
  beforeEach("first settings", function () {
    cy.viewport(1920, 1080);
    cy.visit(Cypress.env('category_url'));
    cy.wait(3000);
  });

  it("Case 1: Extra merchant page", function () {
    cy.url().should("include", "/catalog/teqnika-akhali/1");
    cy.get(selector.elements.closeCookie()).click();
    cy.percySnapshot("Extra merchant page");
  });
});

describe("Extra empty category page", function () {
  beforeEach("first settings", function () {
    cy.viewport(1920, 1080);
    cy.visit(
      "https://staging.extra.ge/catalog/teqnika-akhali/1?filterByDiscount=true&filterByGift=true"
    );
    cy.wait(3000);
    cy.get(selector.elements.closeCookie()).click();
  });

  it("Case 2: Extra category empty page", function () {
    cy.url().should(
      "include",
      "/catalog/teqnika-akhali/1?filterByDiscount=true&filterByGift=true"
    );
    cy.percySnapshot("Extra category empty page");
  });

  it("Case 3: Extra set page", function () {
    cy.visit(
      "https://extra.ge/catalog/set/100-autsilebeli-nivti-agarakistvis/3466"
    );
    cy.wait(3000);
    cy.get(selector.elements.closeCookie()).click();
    cy.percySnapshot("Extra set page");
  });
});
