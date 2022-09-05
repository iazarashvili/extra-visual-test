describe('Timed deals page', () => {
    beforeEach('first settings', function () {
        cy.viewport(1920, 1080)
        cy.visit('https://staging.extra.ge/catalog/set/timed-deals/859')
        cy.wait(3000)
    })

    it('Case 1: Timed deals page', () => {
        cy.percySnapshot('timed deals page')
    });

    it.only('Case 2: timed deals page get category', () => {
        cy.get('#category-list li h2:eq(1)').click()
        cy.wait(2000)
        cy.percySnapshot('timed deals category')
    });
})