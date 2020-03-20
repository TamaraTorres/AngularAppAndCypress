/// <reference types="cypress" />
describe('Testing Dashboard', function() {

    it('Navigate to Search', function() {
      cy.visit('/') ;
      cy.get('[routerlink="/search"]').click()
      cy.url().should('contain', 'search')
      cy.get('#search-box').should('be.empty').and('be.enabled')
      cy.contains('Hero Search').should('be.visible')
    })

    it('Search existing Heroe', function(){
        //TODO:
    })

    it ('Search NON existing Heroe', function(){
        //TODO:
    })
  })