
describe('Working with inputs', () => {
    it('should load the correct url', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')  
        // new addition
        cy.title().should('include', 'Zero - Log in')
      })
    it('should fill username', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('Some invalid name', {delay:1000})
    })
    it('should fill password', () => {
        cy.get('#user_password').clear()
        cy.get('#user_password').type('Some invalid password', {delay:1000})
    })
    it('should submit login form', () => {
        cy.contains('Sign in').click()
    })
    it('should display error message', () => {
        cy.get('.alert-error').should('be.visible')
    })
})
