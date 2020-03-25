import elements from '../utils/elements.json'
describe('Testing Dashboard', function() {

    it('Home Page', function() {
      cy.visit(elements.homePage) 
      cy.get('a')
      .should(($p) => {
        expect($p).to.have.length(8)
        expect($p.get(0)).attr(elements.mainLink).to.contain(elements.dashboard)
        expect($p.get(1)).attr(elements.mainLink).to.contain(elements.heroes)
        expect($p.get(2)).attr(elements.mainLink).to.contain(elements.search)
        expect($p.get(3)).attr(elements.mainLink).to.contain(elements.logs)
      })
      cy.get(elements.title).should('have.text',elements.homeTitle);
  
    });

    it('Navigate to Dashboard', function() {
      cy.visit(elements.homePage) 
      cy.get(elements.dashaboardLink, {timeout:6000}).click()
      cy.url().should('contain', elements.dashboard)
    })

    it ('Check Main heroes are display', function(){
      cy.visit(elements.homePage) 
      cy.get(elements.heroTitle)
      .should(($p) => {
        expect($p).to.have.length(4)
        expect($p.get(0)).contain('CatWoman')
        expect($p.get(1)).contain('Batman')
        expect($p.get(2)).contain('WonderWoman')
        expect($p.get(3)).contain('Magneto')
      })
    })
  })