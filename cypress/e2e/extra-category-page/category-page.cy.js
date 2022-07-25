
describe('Extra category page', function () {
    beforeEach('first settings', function () {
        cy.viewport(1920, 1080)
        cy.visit('https://staging.extra.ge/catalog/teqnika-akhali/1')
        cy.wait(3000)
        cy.contains('თანხმობა').click()
    })

    it('Case 1: Extra merchant page', function () {
        cy.url().should('include', '/catalog/teqnika-akhali/1')
        cy.percySnapshot('Extra merchant page')

    })
})

describe('Extra empty category page', function () {
    beforeEach('first settings', function () {
        cy.visit('https://staging.extra.ge/catalog/teqnika-akhali/1?filterByDiscount=true&filterByGift=true')
        cy.wait(3000)
        cy.contains('თანხმობა').click()
    })

    it('Case 2: Extra category empty page', function () {
        cy.url().should('include', '/catalog/teqnika-akhali/1?filterByDiscount=true&filterByGift=true')
        cy.percySnapshot('Extra category empty page')
    })
})