import selector from "../../support/selectors";

describe("Extra result page test", function () {
  beforeEach("first setting", function () {
    cy.viewport(1920, 1080);
    cy.visit(Cypress.env("base_url"));
    cy.wait(3000);
  });

  it("Case 1: Result Page", function () {
    cy.get('[formcontrolname="searchKeyword"]:eq(0)').type("ტელეფონი");
    cy.wait(1000);
    cy.get(selector.elements.closeCookie()).click();
    cy.percySnapshot("Search input");
    cy.get("button i._x_icon-search:eq(0)").click();
    cy.wait(3000);
    cy.percySnapshot("Result Page");
  });

  it("Case 2: Empty result Page", function () {
    cy.get('[formcontrolname="searchKeyword"]:eq(0)').type(
      "jdskaljd;ajda{enter}"
    );
    cy.wait(3000);
    cy.get(selector.elements.closeCookie()).click();
    cy.percySnapshot("Empty result Page");
  });
});
