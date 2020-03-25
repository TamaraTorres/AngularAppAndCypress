import elements from '../utils/elements.json'

describe('Testing Heroes functionality', function() {

    it('Navigate to Heroes', function() {
      cy.visit(elements.homePage) 
      cy.get(elements.heroesLink).click()
      cy.url().should('contain',elements.heroes)
      cy.get(elements.addHeroName).should('be.visible').and('be.empty')
      cy.contains(elements.addHeroTitle)
    })

    it('Add new heroe', function() {
      cy.visit(elements.heroes)
      cy.get(elements.heroesList).children().should('have.length',10)
      cy.get(elements.addHeroName).type('spiderman')
      cy.get(elements.addHeroBtn).click()
      cy.get(elements.heroesList).children().should('have.length',11)
      cy.get(elements.heroesList).find('li').contains('spiderman')
    })

    it ('Hero Details', function(){
      cy.visit(elements.heroes).then(function(){
        cy.get(elements.heroesList).find('li').contains('Iroman').click()
      })
      cy.url().should('contain', 'detail').then(function(){
        cy.get(elements.subTitle).should('have.text', 'IROMAN Details');
        cy.contains(elements.backBtn).click()
        cy.url().should('contain', 'heroes')
      })
    
    })
    it ('Delete Hero', function() {
      cy.visit(elements.heroes).then(function(){
        cy.get(elements.heroesList).find('li').should('contain','CatWoman')
       // cy.get(elements.heroesList).find('li').contains('CatWoman').parent().get(elements.deleteBtn).click()
      })
      // TODO check back on heroes list the remove one is not displayed
    })

    it ('Edit Heroe', function(){
      cy.visit(elements.heroes).then(function(){
        cy.get(elements.heroesList).find('li').contains('Storm').click()
      })
      cy.get(elements.addHeroName).clear()
      cy.get(elements.addHeroName).type('Stormi2')
      cy.get(elements.saveBtn).click().then(function(){

        cy.url().should('contains', elements.heroes)
        cy.get(elements.heroesList, {timeout :6000}).find('li').should('contain','Stormi2')
      })

    })
  })