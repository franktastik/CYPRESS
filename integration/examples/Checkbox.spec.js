// Load the URl and interact with Checkbox....Same as Radio button 


describe('Interacting with Checkbox', () => {
    it('should load the url', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
    })
    it('should mark the checkbox', () => {
        cy.get('input[type="checkbox"]').click()
        cy.wait(5000)
    })
})
