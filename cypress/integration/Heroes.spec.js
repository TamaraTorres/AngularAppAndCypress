/// <reference types="cypress" />
describe('Testing Heroes functionality', function() {

    it('Navigate to Heroes', function() {
      cy.visit('/') ;
      cy.get('[routerlink="/heroes"]').click()
      cy.url().should('contain', 'heroes')
      cy.get('input').should('be.visible').and('be.empty')
      cy.contains('Add a New Hero')
    })

    it('Add new heroe', function(){
      cy.visit('/heroes')
      cy.get('.heroes').children().should('have.length',10)
      cy.get('input').type('spiderman')
      cy.get('#add').click()
      cy.get('.heroes').children().should('have.length',11)
      cy.get('.heroes').find('li').contains('spiderman')
    })

    it ('Hero Details', function(){
      cy.visit('/heroes').then(function(){
        cy.get('.heroes').find('li').contains('Iroman').click()
      })
      cy.url().should('contain', 'detail').then(function(){
        cy.get('h2').should('have.text', 'IROMAN Details');
        cy.contains('go back').click()
        cy.url().should('contain', 'heroes')
      })
    
    })
    it ('Delete Hero', function() {
     // TODO:
    })

    it ('Edit Heroe', function(){
      cy.visit('/heroes').then(function(){
        cy.get('.heroes').find('li').contains('Storm').click()
      })
      cy.get('input').clear()
      cy.get('input').type('Stormi2')
      cy.get('#save').click().then(function(){

        cy.url().should('contains', 'heroes')
        cy.get('.heroes').find('li').should('contains','Stormi2')
      })

    })
  })