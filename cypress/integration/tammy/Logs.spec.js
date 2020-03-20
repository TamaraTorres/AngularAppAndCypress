/// <reference types="cypress" />
describe('Testing Logs funcionality', function() {

    it('Navigate to Logs', function() {
      cy.visit('/') ;
      cy.get('[routerlink="/logs"]').click()
      cy.url().should('contain', 'logs')
      cy.get('h2').should('contain.text','Actions Log')
      cy.contains('Actions Log')
      cy.get('.clear').should('be.enabled').and('be.visible')
    })

    it('Clear all logs', function(){
        // TODO:
    })

    it ('Verify logs are tracked', function(){

    })

  })