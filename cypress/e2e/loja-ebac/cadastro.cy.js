/// <reference types="cypress"/>
import { faker, Faker } from "@faker-js/faker";

describe('Funcionalidade: Cadastro', () => {
    beforeEach(() =>{
         cy.visit('minha-conta')
    })

    it('Deve completar o cadastro com sucesso - Usando variáveis' , () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type(faker.internet.password())
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
        // Adicionando o primeiro e segundo do usuário
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.person.firstName())
        cy.get('#account_last_name').type(faker.person.lastName())
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
    }); 
    it('Deve completar o cadastro com sucesso - Usando variáveis' , () => {
        var nome = faker.person.firstName()
        var email = faker.internet.email(nome)
    
        var sobrenome = faker.person.lastName()
        var senha = faker.internet.password()

        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type(senha)
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
        // Adicionando o primeiro nome e segundo nome do usuário
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nome)
        cy.get('#account_last_name').type(sobrenome)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
    });

    it('Deve completar o cadastro com sucesso - usando comando customizado', () => {
        cy.preCadastro(faker.internet.email(), 'Nois0por0nois', faker.person.firstName(), faker.person.lastName())
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
    
    });
    
});