/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
        
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('nikolasbezerradasilva9@gmail.com')
        cy.get('#password').type('Nois0por0nois')
        cy.get('.woocommerce-form > .button').click() 
        
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, Nikolas Silva (não é Nikolas Silva? Sair)')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('nikolas@gmail.com')
        cy.get('#password').type('Nois0por0nois')
        cy.get('.woocommerce-form > .button').click() 
        cy.get('.woocommerce-error').should('exist')
    });

    it('Deve exibir uma mensagem de erro ao inserir Senha inválida', () => {
        cy.get('#username').type('nikolasbezerradasilva9@gmail.com')
        cy.get('#password').type('123456')
        cy.get('.woocommerce-form > .button').click() 
        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail nikolasbezerradasilva9@gmail.com está incorreta.')
        cy.get('.woocommerce-error').should('exist')
    })
})