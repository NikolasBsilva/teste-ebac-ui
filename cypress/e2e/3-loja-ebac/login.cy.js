/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {
    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
        cy.get('#username').type('nikolasbezerradasilva9@gmail.com')
        cy.get('#password').type('Nois0por0nois')
        cy.get('.woocommerce-form > .button').click() 
        
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, Nikolas Silva (não é Nikolas Silva? Sair)')
        
    })
})