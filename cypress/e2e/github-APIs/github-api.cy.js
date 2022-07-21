/// <reference types="cypress" />

describe('github API user search', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('write search term', () => {
    cy.get('[data-testid="inputSearch"]').type('jon');
    cy.get('button').click();
    cy.get(':nth-child(1) > [data-testid="accordion-header"]').click();
    cy.wait(3000);
    cy.get(':nth-child(1) > [data-testid="accordion-header"]').click();
    cy.wait(3000);
    cy.get(':nth-child(4) > [data-testid="accordion-header"]').click();
    cy.wait(3000);
    cy.get('[data-testid="inputSearch"]').clear().type('tom');
    cy.get('button').click();
    cy.wait(3000);
    cy.get(':nth-child(1) > [data-testid="accordion-header"]').click();
  });
});
