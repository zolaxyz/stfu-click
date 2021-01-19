/// <reference types="cypress" />
describe('STFU and click test', () => {
    it('Visits the website', () => {
      cy.visit("/")
      cy.wait(1000)
    })
  it('Enters team name', () =>{
    cy.get('#name').type('test');
    cy.get('button').click()
  })
  it('Checks number of clicks', () => {
    let teamClicks1, teamClicks2;
    cy.wait(2000)
    cy.get('h3').contains('Your clicks:').siblings().contains('0')
    cy.get('h3').contains('Team clicks:').siblings().then(($teamClicks1) =>{
      const teamClicks1 = parseInt($teamClicks1.text(), 10)
      cy.get('button').click()
      cy.wait(1000)
      cy.get('h3').contains('Team clicks:').siblings().then(($teamClicks2) => {
      const teamClicks2 = parseInt($teamClicks2.text(), 10)
      expect(teamClicks2).to.eq(teamClicks1 + 1)
      cy.get('h3').contains('Your clicks:').siblings().contains('1')
    })
    })
  })
})