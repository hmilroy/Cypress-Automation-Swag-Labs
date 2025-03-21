// Import dependencies
/// <reference types="cypress" />
const loginElements = require("../../page-objects/page-elements/login-page-elements.json");

class LoginPageActions {
  typeUserName(username) {
    cy.get(loginElements.userName).type(username);
  }

  typePassword(password) {
    cy.get(loginElements.password).type(password);
  }

  clickLoginButton() {
    cy.get(loginElements.loginButton).click();
  }
}
export default LoginPageActions;
