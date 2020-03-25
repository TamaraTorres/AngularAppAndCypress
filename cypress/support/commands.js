import elements from '../utils/elements.json'

Cypress.Commands.add("goHome", () => {
    cy.visit(elements.homePage) ;
 })