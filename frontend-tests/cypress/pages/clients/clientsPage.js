/// <reference types="cypress" />

const clientsHeader='Clients'
const clientsTitle='Testers Hotel'
const createClientBtn='#app > div > h2 > a'
const clientsBack='#app > div > div:nth-child(3) > a'
const client3Identifier='Viktor Hagstrom'
const editClient3=':nth-child(3) > .action'
const deleteClient3='.menu > :nth-child(2)'
const client3Div='.clients > :nth-child(3)'


function assertClientsPage(){
    cy.contains(clientsHeader)
}
function goToCreateClient(){
    cy.get(createClientBtn).click()
}
function assertNewClient(){
    cy.contains(client3Identifier)
}
function deleteClient(){
    cy.get(editClient3).click()
    cy.get(deleteClient3).click()
}
function assertClientDeleted(){
    cy.get(client3Div).should('not.exist')
}
function leaveClientsPage(){
    cy.get(clientsBack).click()
}

module.exports = {
    assertClientsPage,
    goToCreateClient,
    assertNewClient,
    deleteClient,
    assertClientDeleted,
    leaveClientsPage
}
