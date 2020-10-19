/// <reference types="cypress" />

describe('Regression test suite', function(){
    it('Perform valid login', function(){
        cy.visit('http://localhost:3000/login')
    })

})