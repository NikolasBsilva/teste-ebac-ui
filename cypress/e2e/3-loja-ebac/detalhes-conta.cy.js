/// <reference types="cypress" />

describe('Funcionalidade: Detalhes da conta', () => {

    beforeEach( () => {
        cy.visit('minha-conta/edit-account')
        cy.fixture('perfil').then(login =>{
             cy.login(login.usuario, login.senha)
        })
       
    });

    it('Deve completar detalhes da conta com sucesso', () => {
        cy.detalhesConta('Nikolas', 'Silva', 'Nikolaslindo')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
    });


})