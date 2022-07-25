describe('Extra Home Page Visual Tests', function () {
    beforeEach('first settings', function () {
        cy.visit('https://staging.extra.ge/')
        cy.wait(3000)
    })
    it('Case 1: home page', function () {
        cy.url().should('include', 'https://staging.extra.ge/')
    })
    it('Case 2: Open Sign in form', function () {
        cy.contains('შესვლა')
        cy.wait(2000)

    })
    it('Case 3: Empty basket page', function () {

    })
    it('Case 4: Burger menu', function () {

    })
    it('Case 5: Photo search form', function () {

    })
    it('Case 6: Footer', function () {

    })
})