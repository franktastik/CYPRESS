// Write data into JSON or local data files (text file). 
describe('Write / Read Data to JSON / Text file', () => {
    it('should write data into JSON', () => {
        cy.writeFile('log.json', { name: "Frank", age: 27} ) // cy.writeFile (Filename, data to insert)
    })

    it('should write data to the text file', () => {
        cy.writeFile('log.txt', 'Hello World')
    })
    // Read Data from JSON / Local data files / Text file

    it('should read data and verify from JSON file', () => {
        cy.readFile('log.json').its('age').should('eq', 27)
    })

    it('should read and verify data from text file', () => {
        cy.readFile('log.txt').should('eq', 'Hello World')
    })
})

// Result is in log.json contain Name and Age 




