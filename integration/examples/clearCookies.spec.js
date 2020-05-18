

  describe('Working with inputs', () => {
    it('should load the correct url', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')  
        cy.clearCookies({log: true})
        cy.clearLocalStorage('your item', {log: true})
      })
    it('should fill username', () => {
        cy.get('#user_login').as('username')
        cy.get('@username').clear()
        cy.get('@username').type('Some invalid name', {delay:1000})
    })
    it('should fill password', () => {
        cy.get('#user_password').as('password')
        cy.get('@password').clear()
        cy.get('@password').type('Some invalid password', {delay:1000})
    })
})