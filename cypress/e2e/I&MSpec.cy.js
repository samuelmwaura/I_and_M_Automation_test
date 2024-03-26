const {baseUrl,homePage} = require('../support/testUtils/testAutomationUtils')

describe('I&MAutomationTest', () => { 
  beforeEach(() => {
    cy.visit("/");
  });

  it("Automating Navigation", () => {
    const linksText = [];
  
    cy.get("ul#menu-header-menu > li")
      .each(($li) => {
        cy.wrap($li)
          .find("> a")
          .invoke("text")
          .then((text) => {
            linksText.push(text.trim());
          });
      })
      .then(() => {
        linksText.forEach((text) => {
          cy.contains("a", text).click();
          if (!text.toLowerCase() == homePage)
            cy.url().should("eq", `${baseUrl}/${text.toLowerCase()}`);
        });
      });
  });

  it("Interacting with Credit Card Menu", () => {
    verifyNavigation(
      'span[class="feature-6-list-item-text"]:contains("Cards")',
      `${baseUrl}/personal/cards/`,
      "Explore more with I&M Cards!"
    );
    verifyNavigation(
      'span[class="feature-6-list-item-text"]:contains("Credit Cards")',
      `${baseUrl}/personal/cards/credit-cards/`,
      "I&M Bank Credit Cards"
    );
    verifyNavigation(
      ":nth-child(6) > .feature-30-body-col > .card > .text-gray-5 > .card-body",
      `${baseUrl}/cards/im-visa-international-gold-card/`,
      "Visa International Gold Credit Card"
    );
  });

})