/// <reference types="cypress" />

import * as target from '../targets/targets'



//Elements
const indexTitle = 'Testers Hotel'
const checkPhrase = 'Login'
const userNameInput = '#app > div > form > div:nth-child(1) > input[type=text]'
const userPassInput = '#app > div > form > div:nth-child(2) > input[type=password]'
const loginBtn = '#app > div > form > div.field.action > button'

//Actions

function indexCheckTitle(cy){
    cy.title().should('eq',indexTitle)
}
function login(cy){
    cy.visit(target.baseUrl)
    indexCheckTitle(cy)
    cy.contains(checkPhrase)
    cy.get(userNameInput).type(target.userName)
    cy.get(userPassInput).type(target.userPass)
    cy.get(loginBtn).click()
}
//Export
module.exports={
indexCheckTitle,
login
}