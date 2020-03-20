/// <reference types="cypress" />
describe('Testing Dashboard', function() {

    it('Home Page', function() {
      cy.visit('/') ;
      cy.get('a')
      .should(($p) => {
        expect($p).to.have.length(8)
        expect($p.get(0)).attr('routerlink').to.contain('dashboard')
        expect($p.get(1)).attr('routerlink').to.contain('heroes')
        expect($p.get(2)).attr('routerlink').to.contain('search')
        expect($p.get(3)).attr('routerlink').to.contain('logs')
      })
      cy.get('h1').should('have.text', ' Tammy Selected Heroes! ');
  
    });

    it('Navigate to Dashboard', function() {
      cy.visit('/') ;
      cy.get('[routerlink="/dashboard"]').click()
      cy.url().should('contain', 'dashboard')
    })

    it ('Check Main heroes are display', function(){
      
    })
  })