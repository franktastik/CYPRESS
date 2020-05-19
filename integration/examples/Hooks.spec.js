
// Abstraction with `Classes - describe block, classes
//Includes before and after Hooks

class BasePage {
    static loadHomePage() {
        cy.visit('https://devexpress.github.io/testcafe/example/')
    }

    static wait(number) {
        cy.wait(number)
    }
}

class HomePage extends BasePage {
    static scrollToBottom() {
        cy.get('#submit-button').scrollIntoView()
    }

    static scrollToTop() {
        cy.get('header').scrollIntoView()
    }
}

describe('Abstraction with classes', () => {
    before(function() {
        //runs before all tests inside describe
        // sets up test data oe test context
        // seed or reset the database before
        HomePage.loadHomePage()
    })

    after(function() {
        //runs after all tests inside describe block are done 
        //Good for test clean up
        // Good to clean cookies or local storage


    })

    beforeEach(function() {
        // runs before each it block in the describe block
        // use case: load some data before each ....
    })

    afterEach(function() {
        // runs after each it block in the describe block
        // use case: look at for some function before ..
    })
    // it.skip === jump to the 2nd  it block
    
    it.skip('1st IT', () => {
    HomePage.scrollToBottom()
    HomePage.wait(5000)
    HomePage.scrollToTop()
    HomePage.wait(3000) 

    })

    // it.only === test only the 2nd it block. It overrides the 1st it block

    it.only('2nd IT', () => {
        HomePage.scrollToBottom()
        HomePage.wait(5000)
        HomePage.scrollToTop()
        HomePage.wait(3000) 
    
        })

    it('3rd IT', () => {
        HomePage.scrollToBottom()
        HomePage.wait(5000)
        HomePage.scrollToTop()
        HomePage.wait(3000)  
    })
})
