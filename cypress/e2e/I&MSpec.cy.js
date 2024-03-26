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

})