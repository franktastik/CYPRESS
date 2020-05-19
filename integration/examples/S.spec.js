

describe('Cypress.$ Function', () => {
before(function () {

    cy.visit('http://zero.webappsecurity.com/index.html')

})

    it('Expose JQuery element in the current window', () => {

        const signInButton = Cypress.$('#signin_button')

        signInButton.click()
    })
})

