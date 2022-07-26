const {defineConfig} = require("cypress");

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        env: {
            base_url: "https://staging.extra.ge/",
            profile_orders: "https://staging.extra.ge/user/profile/orders",
            profile_data: "https://staging.extra.ge/user/profile/data",
            profile_my_cards: "https://staging.extra.ge/user/profile/my-cards",
            profile_balance: "https://staging.extra.ge/user/profile/balance",
            profile_security: "https://staging.extra.ge/user/profile/security",
            category_url: "https://staging.extra.ge/catalog/teqnika-akhali/1",
            timed_deals_page_url: "https://staging.extra.ge/catalog/set/timed-deals/859",
            merchant_page_url: "https://staging.extra.ge/seller/istore/75",
        },
    },
});
