// Overide time 

describe('Working with Time and Date', () => {
    it('should overrride the current time', () => {
        const date = new Date(2020, 3, 10).getTime()
        cy.clock(date)
        cy.log(date)
        
    })

    it('should load the correct url', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')  
        cy.clearCookies({log: true})
        cy.clearLocalStorage('your item', {log: true})
})

})
