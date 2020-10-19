/// <reference types="cypress" />

describe('Regression test suite', function(){
    it('Perform valid login', function(){
        cy.visit('http://localhost:3000/login')
        cy.title().should('include', 'Hotel')
        cy.contains('Login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Welcome tester01!')
        cy.get('button.btn').click()
        cy.title().should('include', 'Hotel')
        cy.contains('Login')
        cy.url('http://localhost:3000/login')
    })

})