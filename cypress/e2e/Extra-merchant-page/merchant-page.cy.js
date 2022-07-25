describe('Extra Merchant page', function () {
    beforeEach('first settings', function () {
        cy.viewport(1920, 1080)
        cy.visit('https://staging.extra.ge/seller/istore-test/75')
        cy.wait(3000)
        cy.contains('თანხმობა').click()
    })

    it('Case 1: Extra merchant page', function () {
        cy.url().should('include', '/seller/istore-test/75')
        cy.percySnapshot('Extra merchant page')

    })
})