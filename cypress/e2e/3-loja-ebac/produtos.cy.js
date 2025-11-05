/// <reference types="cypress"/>
import produtosPage from "../../support/Page-objects/produtos.page";


describe('Funcionalidade: produtos', () => {

    beforeEach(() => {
        produtosPage.vistarUrl()
        
    });
    
    it('Deve selecionar um produto da lista', () => {
       produtosPage.buscarProdutoLista('Arcadio Gym Short')
       cy.get('.woocommerce-product-details__short-description > p').should('exist')
    });

    it.only('Deve buscar um produto com sucesso', () => {
        let pruduto = "Vulcan Weightlifting Tank"
        produtosPage.buscarProduto(pruduto)
        cy.get('.product_title').should('contain', 'Vulcan Weightlifting Tank')
    });

    it('Deve visitar a página do prudoto', () => {
        
    });

    it('Deve adicionar produto ao carrinho ', () => {
        
    });
});