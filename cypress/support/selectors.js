class PageObject {
  elements = {
    closeCookie: () => "app-cookie-banner button:eq(0)",
  };
}

module.exports = new PageObject();
