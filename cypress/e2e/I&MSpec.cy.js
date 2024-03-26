const { verifyNavigation,baseUrl, homePage } = require('../support/testUtils/testAutomationUtils')

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


  it('Terms and Conditions Expansion', () => {
    verifyNavigation(
      'ul#menu-footer-menu > li > a:contains("Terms and Conditions")',
      `${baseUrl}/terms-and-conditions/`, 
      'Terms and Conditions'
    )
    
    cy.get('i.dropdown-select-prefix-icon.bi.bi-filter.mr-2').click()
    cy.get('div.dropdown > ul.dropdown-menu').should('be.visible')
  });

  it("Form Automation", () => {
    cy.fixture("formData.json").then((formData) => {
      const { fullName, email, phoneNumber, nearestBranch } = formData;

      cy.visit("/accounts/paygo-account/");

      const formFields = [
        { label: "Full Name", attr: "input_17_2", value: fullName },
        { label: "Email", attr: "input_17_3", value: email },
        { label: "Phone Number", attr: "input_17_4", value: phoneNumber },
      ];
  
      formFields.forEach(({ label, attr, value }) => {
        cy.contains("label", label)
          .should("have.attr", "for", attr)
          .next()
          .type(value);
  
        // Assert
        cy.get(`input#${attr}`).should("have.value", value);
      });
  
      // Nearest branch selection
      cy.get("select#input_17_5")
        .select(nearestBranch)
        .should("have.value", nearestBranch);
  
      cy.get(
        'input[type="radio"][value="I am interested, please contact me"]'
      ).check();
      cy.get('input[type="checkbox"][value="1"]').check();
  
      cy.get('input[type="submit"]');
    });
  });

})