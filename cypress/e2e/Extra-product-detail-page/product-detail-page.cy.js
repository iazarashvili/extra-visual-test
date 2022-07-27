describe('Extra Product Detail Page', function() {
    beforeEach('first settings', function() {
        cy.viewport(1920, 1080)
        cy.visit('https://staging.extra.ge/product/apple-13-macbook-pro-a2338-m1-512gb-2020-space-gray-noutbuqi/260681')
        cy.wait(4000)
    })
    it('Case 1: Product detail page', function() {
        cy.percySnapshot('Product detail page')
    })

    it('Case 2: Detail page similar products', function() {
        cy.scrollTo('bottom')
        cy.wait(1000)
        cy.percySnapshot('Detail page similar products')
    })
})