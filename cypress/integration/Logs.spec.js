import elements from '../utils/elements.json'

describe('Testing Logs funcionality', function() {

    it('Navigate to Logs', function() {
      cy.visit(elements.homePage) 
      cy.get(elements.logsLink).click()
      cy.url().should('contain', elements.logs)
      cy.get(elements.subTitle).should('contain.text',elements.logsTitle)
      cy.contains(elements.logsTitle)
      cy.get(elements.clearLogBtn).should('be.enabled').and('be.visible')
    })

    it ('Verify logs are tracked', function(){
      //navigate dashboard
      cy.visit(elements.homePage) 
      cy.get(elements.dashaboardLink).click()
      cy.get(elements.heroTitle ,{timeout:6000}).should('have.length', 4)
      //navigate to heroes 
      cy.get(elements.heroesLink).click()
      cy.get(elements.heroesList,{timeout:6000}).children().should('have.length',10)
      //navigate to logs and see the logs 
      cy.get(elements.logsLink).click()
      cy.get(elements.subTitle).should('contain.text',elements.logsTitle)
      cy.get(elements.logsMessage).children().should('have.length', 4)

    })

    it('Clear all logs', function(){
        cy.visit(elements.logs)
        cy.get(elements.clearLogBtn).click()
        cy.get(elements.logsMessage).children().should('have.length', 2)
    })

   

  })