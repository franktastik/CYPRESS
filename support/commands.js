// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


//Define your Commands and apply to them to Custom.spec.js
Cypress.Commands.add('login', (username, password) => {
    cy.clearCookies
    cy.clearStorage
    cy.get('#user_login').type(username)
    cy.get('#user_password').type(password)
    cy.get('#user_remember_me').click()
    cy.contains('Sign in').click()
})