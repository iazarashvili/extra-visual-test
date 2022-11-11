describe('Extra Basket Page Visual Tests', () => {
    beforeEach('Precondition Configurations', () => {
        cy.viewport(1920)
        cy.viewport(1920, 1080);
        cy.visit(Cypress.env('base_url'));
        cy.get(selector.elements.closeCookie()).click();
        cy.wait(3000);
    })
    it("Case 1: Empty basket page", function () {
        cy.contains("კალათა").click();
        cy.wait(2000);
        cy.percySnapshot("Empty basket page");
    });

    it('Case 2: Add product from basket', () => {

    })
})