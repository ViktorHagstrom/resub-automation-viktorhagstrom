/// <reference types="cypress" />

import * as target from '../targets/targets'

//Elements
const userField = '.user'
const user = 'Welcome tester01!' // CHANGE USER HERE
const logOutBtn = '#app > header > div > div > button'
const dashboardTitle = 'Testers Hotel'
const roomsView = '#app > div > div > div:nth-child(1) > a'
const clientsView = '#app > div > div > div:nth-child(2) > a'
const billsView = '#app > div > div > div:nth-child(3) > a'
const reservationsView = '#app > div > div > div:nth-child(4) > a'
const roomsDiv='.blocks > :nth-child(1)'
const clientsDiv='.blocks > :nth-child(2)'
const billsDiv='.blocks > :nth-child(3)'
const reservationsDiv='.blocks > :nth-child(4)'

//Actions
function dashCheckTitle(){
    cy.title().should('eq',dashboardTitle)
}
function dashAssertUser(){
cy.get(userField).contains(user)
}
function dashLogOut(){
    cy.get(logOutBtn).click()
}
function goToRooms(){
    cy.get(roomsView).click()
}
function goToClients(){
    cy.get(clientsView).click()
}
function goToBills(){
    cy.get(billsView).click()
}
function goToRerservation(){
    cy.get(reservationsView).click()
}
function checkRooms(contentToConfirm){
    cy.get(roomsDiv).should('contain',contentToConfirm)
}
function checkClients(contentToConfirm){
    cy.get(clientsDiv).should('contain',contentToConfirm)
}
function checkBills(contentToConfirm){
    cy.get(billsDiv).should('contain',contentToConfirm)
}
function checkReservations(contentToConfirm){
    cy.get(reservationsDiv).should('contain',contentToConfirm)
}

function checkDashboard(confirmArray){ // Dont like this solution with the array but dont know JS well enough to make it prettier
    checkRooms(confirmArray[0])
    checkClients(confirmArray[1])
    checkBills(confirmArray[2])
    checkReservations(confirmArray[3])
}

//Export

module.exports ={
dashCheckTitle,
dashAssertUser,
dashLogOut,
goToRooms,
goToClients,
goToBills,
goToRerservation,
checkDashboard

}