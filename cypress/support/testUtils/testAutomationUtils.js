//Tests conts.
const baseUrl = "https://www.imbankgroup.com/ke";
const homePage = "home";

//Helper function
const verifyNavigation = (selector, expectedUrl, expectedHeader) => {
    cy.get(selector).click();
    cy.url().should("eq", expectedUrl);
    cy.contains("h1", expectedHeader).should("be.visible");
};

module.exports = {verifyNavigation,baseUrl,homePage};

