import elements from '../utils/elements.json'

describe('Testing Search', function() {

    it('Navigate to Search', function() {
      cy.goHome()
      cy.get(elements.searchLink).click()
      cy.url().should('contain', elements.search)
      cy.get(elements.searchInput).should('be.empty').and('be.enabled')
      cy.contains(elements.searchTitle).should('be.visible')
    })

    it('Search existing Heroe', function(){
       cy.visit(elements.search)
       cy.get(elements.searchInput).clear()
       cy.get(elements.searchInput).type('Batman')
       cy.get(elements.searchResult).children().should('have.length',1)
       cy.contains('Batman').should('be.visible')
       cy.contains('Batman').click()
    })

    it ('Search NON existing Heroe', function(){
      cy.visit(elements.search)
      cy.get(elements.searchInput).clear()
      cy.get(elements.searchInput).type('Hulk')
      cy.get(elements.searchResult).should('empty')
    })
  })