import selector from "../../support/selectors";

describe("Timed deals page", () => {
  beforeEach("first settings", function () {
    cy.viewport(1920, 1080);
    cy.visit(Cypress.env('timed_deals_page_url'));
    cy.get(selector.elements.closeCookie()).click();
    cy.wait(4000);
  });

  it("Case 1: Timed deals page", () => {
    cy.percySnapshot("timed deals page");
  });

  it("Case 2: timed deals page get category", () => {
    cy.get(":nth-child(2) > ._s_flex > ._s_mb-none").click({
      scrollBehavior: false,
    });
    cy.wait(2000);
    cy.percySnapshot("timed deals category");
  });
});
