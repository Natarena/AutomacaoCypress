/// <reference types="cypress" />

import loginElements from '../elements/login_elements'

class LoginPage {
    openAlurapic(){
        cy.visit('/');
    }

    enterInputLogin(){
        cy.get(loginElements.inputName()).type('nathaliacr');
    }

    enterInputPassword(){
        cy.get(loginElements.inputPassword()).type('12345678');
    }

    clickButtonLogin(){
        cy.get(loginElements.buttonLogin()).click();
    }

    validateLoginSuccess(){
        cy.get(loginElements.userNameLogin()).should('have.text', 'nathaliacr');

    }
}
export default new LoginPage();