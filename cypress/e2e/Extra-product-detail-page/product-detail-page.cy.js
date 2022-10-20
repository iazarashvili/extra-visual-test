import selector from "../../support/selectors";

const firstItemUrl = "https://staging.extra.ge/product/apple-13-macbook-pro-a2338-m1-512gb-2020-space-gray-noutbuqi/260681"
const secondItemUrl = "https://staging.extra.ge/product/apple-13-macbook-pro-a2338-m1-512gb-2020-space-gray-noutbuqi/260681"
const thirdItemUrl = "https://staging.extra.ge/product/muqi-lurji-maghal-saqeloiani-sada-trikotazhis-maisuri/405089"

describe("Extra Product Detail Page", function () {
    beforeEach("first settings", function () {
        cy.viewport(1920, 1080);
    });
    it("Case 1: Product detail page", function () {
        cy.visit(firstItemUrl);
        cy.get(selector.elements.closeCookie()).click();
        cy.wait(4000);
        cy.percySnapshot("Product detail page");
    });

    it("Case 2: Detail page similar products", function () {
        cy.visit(secondItemUrl);
        cy.wait(4000);
        cy.scrollTo("bottom");
        cy.wait(1000);
        cy.get(selector.elements.closeCookie()).click();
        cy.percySnapshot("Detail page similar products");
    });

    it("Case 3: Product detail page with color and size", function () {
        cy.visit(thirdItemUrl);
        cy.wait(3000);
        cy.get(selector.elements.closeCookie()).click();
        cy.percySnapshot("Detail Page have color and size");
    });
});
