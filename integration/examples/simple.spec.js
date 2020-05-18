// describe('My first simple test with cypress', () => {
//     it('True should be true', () => {
//         expect(true).to.equal(true)
//     })

//     it('5 should be 5', () => {
//         expect(5).to.equal(5)
//     })
// })

// Running test in Headless mode

// describe('Another describe block', () => {
//     it('False should be false', () => {
//         expect(false).to.equal(false)
//     })
// })

// Load URL with timeout

// describe('Browser Actions', () => {
//     it('should load correct url', () => {
//         cy.visit('https://example.com/', {timeout: 10000})
// })
//     it('should check correct url', () => {
//         cy.url().should('include', 'https://example.com')
//     })
// // Implicit wait
//     it('should wait for 3 seconds', () => {
//         cy.wait(3000)
//     })
// // pause 
//     it('should pause the eexecution', () => {
//         cy.pause()
//     })
// // Check if the h1 and h2 element is visible.
//     it('should check for correct element on the page', () => {
//         cy.get('h1').should('be.visible')
//         cy.get('h2').should('be.visible')
//     })
// })


// Interacting with Buttons using Assertions. Click on links and buttons



describe('Browser Actions', () => {
    it('should load books website', () => {
        cy.visit('http://books.toscrape.com/index.html', {timeout:10000})
        cy.url().should('include', 'index.html')
        // cy.log('Website Loaded')
        cy.log('Before Reload')
        cy.reload()
        cy.log('After Reload')
    })    
    // 

    // it('should click on Travel category', () => {
    //     cy.get('a').contains('Travel').click()
    //     cy.get('h1').contains('Travel')
    // })
    // it('should display correct number of books', () => {
    //     cy.get('.product_pod').its('length',).should('equal',11)
    //     cy.get('.product_pod').its('length',).should('equal',12)
    // })


    it('should click on Poetry category', () => {
        cy.get('a').contains('Poetry').click()
        cy.get('h1').contains('Poetry')
        cy.get('a').contains('Olio').click()

    })
    it('should have correct price price tag', () => {
        cy.get('.price_color').contains('£23.88')

    })
})


