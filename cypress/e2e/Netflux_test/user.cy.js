describe('Netflux test', () => {
  it('should visit netflux', () => {
    cy.visit('http://localhost:3000');
    // wait page load
    cy.wait(10000);
  });

  it('should hover the user icon', () => {
    cy.findByRole('img', { name: /netflix logo/i }).trigger('mouseover');
  });

  it('should hover Most Popular on Netflux ', () => {
    cy.findByRole('heading', { name: /most popular on netflux/i }).trigger(
      'mouseover'
    );
  });

  it('should click on series link', () => {
    cy.findByRole('link', { name: /series/i }).click();
  });

  it('should click on arrow right', () => {
    cy.get("[role='Most Popular Seriesright']").click();
  });
  it('should hover a card and click on + button', () => {
    cy.get("[alt='The Simpsons']")
      .scrollIntoView()
      .trigger('mouseover')
      .then(() => {
        cy.findByText('+').click();
      })
      .trigger('mouseout');
    cy.wait(3000);
  });
  it('should hover a card and click on + button', () => {
    cy.get("[alt='Arcane']")
      .scrollIntoView()
      .trigger('mouseover')
      .then(() => {
        cy.findByText('+').click();
      })
      .trigger('mouseout');
    cy.wait(3000);
  });
  it('should hover a card and click on + button', () => {
    cy.get("[alt='Breaking Bad']")
      .scrollIntoView()
      .trigger('mouseover')
      .then(() => {
        cy.findByText('+').click();
      })
      .trigger('mouseout');
    cy.wait(3000);
  });
  it('should hover a card and click on + button', () => {
    cy.get("[alt='Game of Thrones']")
      .scrollIntoView()
      .trigger('mouseover')
      .then(() => {
        cy.findByText('+').click();
      });
    cy.wait(3000);
  });
  it('should click on My List link', () => {
    cy.findByRole('link', { name: /my list/i }).click();
  });
});
