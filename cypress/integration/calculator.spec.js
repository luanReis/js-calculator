describe('Calculator', () => {
  it('should append the number when pressed', () => {
    cy.visit('localhost:5000');

    cy.get('#one').click();

    cy.get('#display').should('have.value', '01');

    cy.get('#two').click();

    cy.get('#display').should('have.value', '012');

    cy.get('#three').click();
    cy.get('#four').click();
    cy.get('#five').click();

    cy.get('#display').should('have.value', '012345');

    cy.get('#six').click();
    cy.get('#seven').click();
    cy.get('#eight').click();
    cy.get('#nine').click();

    cy.get('#display').should('have.value', '0123456789');
  });
});
