import selector from "../../support/selectors";

describe("Extra Merchant page", function () {
  beforeEach("first settings", function () {
    cy.viewport(1920, 1080);
    cy.visit("https://staging.extra.ge/seller/istore/75");
    cy.wait(3000);
    cy.get(selector.elements.closeCookie()).click();
  });

  it("Case 1: Extra merchant page", function () {
    cy.url().should("include", "/seller/istore/75");
    cy.percySnapshot("Extra merchant page");
  });
});
