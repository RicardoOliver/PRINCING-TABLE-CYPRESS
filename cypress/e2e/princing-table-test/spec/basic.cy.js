///<reference types="cypress"/>


describe('Princing Table basic', () => {
    beforeEach(() => {
        cy.visit('/PRINCING-TABLE-CYPRESS/index.html');
    });

    it('Validar card basic', () => {
        cy.get('.card').find('.title').should('contain', 'Basic');
        cy.get('.card').find('.price').should('contain', 'R$15');
        cy.contains('Valor diario').should('be.visible');
        cy.contains('Seguro incluso').should('be.visible');
        cy.contains('Assistência 24h').should('be.visible');
        cy.contains('Acessórios').should('be.visible');
    });

    it('realiza cadatro do formulario da tabela de preço', () => {
        cy.wait(2000)
        cy.visit('/PRINCING-TABLE-CYPRESS/form.html');
        cy.get('#names')
            .should('be.visible')
            .type('Ricardo Oliveira')
        cy.get('#email')
            .should('be.visible')
            .type('rickOliver@exemplo.com')
        cy.get('#phone')
            .should('be.visible')
            .type('11999999999')
        cy.get('#mensagem')
            .should('be.visible')
            .type('Gostaria de saber mais sobre os planos da empresa')
        cy.get('#btnSend').click()
            .should('be.visible')
            .click()
            cy.wait(2000)
    });

});
