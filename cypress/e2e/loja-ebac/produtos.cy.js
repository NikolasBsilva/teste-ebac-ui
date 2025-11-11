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

    it('Deve buscar um produto com sucesso', () => {
        let pruduto = "Vulcan Weightlifting Tank"
        produtosPage.buscarProduto(pruduto)
        cy.get('.product_title').should('contain', 'Vulcan Weightlifting Tank')
    });

    it('Deve visitar a página do prudoto', () => {
        produtosPage.visitarProduto('apollo running short')
         cy.get('.product_title').should('contain', 'Apollo Running Short')
    });

    it('Deve adicionar produto ao carrinho ', () => {
        let qtd = 7
        produtosPage.buscarProduto('Typhon Performance Fleece-lined Jacket')
        produtosPage.addProdutoCarrinho('XL', 'Black', qtd);
        cy.get('.woocommerce-message').should('contain', qtd + ' “Typhon Performance Fleece-lined Jacket” foram adicionados no seu carrinho.')
        
    });

    it('Buscando da massa de dados ', () => {

        cy.fixture('produtos').then(dados => {
            
        produtosPage.buscarProduto(dados[0].nomeProduto)
        produtosPage.addProdutoCarrinho(
             dados[0].tamano,
             dados[0].cor, 
             dados[0].quantidade);
        cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto)

        })

        
    });
});