/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')
describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('my-account')
        
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

    it('DEve fazer login com sucesso - Usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click() 
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, Nikolas Silva (não é Nikolas Silva? Sair)')
    })

    it('DEve fazer login com sucesso - Usando Fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario , {log: false})
            cy.get('#password').type(dados.senha ,{log: false})
            cy.get('.woocommerce-form > .button').click() 
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, Nikolas Silva (não é Nikolas Silva? Sair)')

        })
    })

    it.only('Deve fazer login com sucesso - usando Comandos customizados', () => {
        cy.login('nikolasbezerradasilva9@gmail.com', 'Nois0por0nois')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, Nikolas Silva (não é Nikolas Silva? Sair)')
    });
    
})