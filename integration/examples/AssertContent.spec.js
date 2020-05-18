
it('should read and verify browser document content', () => {

    cy.visit('https://www.example.com')
    cy.wait(2000)
    cy.document().its('contentType').should('equal', 'text/html')
    cy.document().should('have.property', 'charset').and('equal', 'UTF-8')
})