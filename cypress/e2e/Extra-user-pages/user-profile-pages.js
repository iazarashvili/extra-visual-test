
import users from "../../fixtures/users"

describe('Extra user pages', function () {
    beforeEach('first settings', function () {
        cy.viewport(1920, 1080)
        cy.visit('https://staging.extra.ge/')
        cy.wait(2000)
        cy.authorization(users.email, users.password)
        cy.wait(3000)
    })
    it('Case 1: User orders page', function () {
        cy.visit('https://staging.extra.ge/user/profile/orders')
        cy.wait(4000)
        cy.url().should('include', 'user/profile/orders')
        cy.percySnapshot('User orders page')
    })

    it('Case 2: User profile page', function () {
        cy.visit('https://staging.extra.ge/user/profile/data')
        cy.wait(4000)
        cy.percySnapshot('User profile page')
    })

    it('Case 3: My cards page', function () {
        cy.visit('https://staging.extra.ge/user/profile/my-cards')
        cy.wait(4000)
        cy.percySnapshot('My cards page')
    })

    it('Case 4: Balance page', function () {
        cy.visit('https://staging.extra.ge/user/profile/balance')
        cy.wait(4000)
        cy.percySnapshot('Balance page')
    })

    it('Case 5: Security page', function () {
        cy.visit('https://staging.extra.ge/user/profile/security')
        cy.wait(4000)
        cy.percySnapshot('Security page')
    })
})