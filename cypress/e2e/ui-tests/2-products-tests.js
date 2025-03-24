/// <reference types="cypress" />

import LoginPageActions from "../../page-objects/page-actions/login-page-actions";
const loginElements = require("../../page-objects/page-elements/login-page-elements.json");

const loginPageActions = new LoginPageActions();
let loginData;

before(() => {
  cy.fixture("login-data").then((data) => {
    loginData = data;
  });
});

describe("Products Page", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
    loginPageActions.loginFunction(loginData.userName, loginData.password);
    //const adminUsername = Cypress.env('adminUsername');
    // const adminPassword = Cypress.env('adminPassword');
    // cy.logInAsAdmin(adminUsername, adminPassword);
    // cy.visit(Cypress.env('environment').OBSAS_BASE_URL);
  });

  // describe("example to-do app", () => {
  //   beforeEach(() => {
  //     cy.visit("https://www.saucedemo.com/");
  //   });
  // });

  it("Verify product details", () => {});
});
