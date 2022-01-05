/// <reference types="cypress" />

import * as target from '../../targets/targets'

const newClientHeader='New Client'
const nameField=':nth-child(1) > input'
const emailField=':nth-child(2) > input'
const phoneField=':nth-child(3) > input'
const saveBtn='.blue'
const backBtn='[href="/clients"]'

function assertNewClientPage(){
    cy.contains(newClientHeader)
}
function fillName(){
    cy.get(nameField).type(target.clientName)
}
function fillEmail(){
    cy.get(emailField).type(target.clientEmail)
}
function fillPhone(){
    cy.get(phoneField).type(target.clientPhone)
}
function saveClient(){
    cy.get(saveBtn).click()
}


function createNewClient(){
    fillName()
    fillEmail()
    fillPhone()
    saveClient()
}

module.exports = {
    assertNewClientPage,
    createNewClient
}
