/// <reference types="cypress" />

import * as target from '../../targets/targets'

const newReservationHeaderDiv='h2 > div'
const newReservationHeader='New Reservation'
const startDateField=':nth-child(1) > input'
const endDateField=':nth-child(2) > input'
const clientField=':nth-child(3) > select'
const roomField=':nth-child(4) > select'
const billField=':nth-child(5) > select'
const backBtn='[href="/reservations"]'
const saveBtn='.blue'

function assertNewResPage(){
    cy.get(newReservationHeaderDiv).should('contain',newReservationHeader)
}
function fillStartDate(){
    cy.get(startDateField).type(target.resStartDate)
}
function fillEndDate(){
    cy.get(endDateField).type(target.resEndDate)
}

function selectClient(){
    cy.get(clientField).select(target.resClient)
}
function selectRoom(){
    cy.get(roomField).select(target.resRoom)
}
function selectBill(){
    cy.get(billField).select(target.resBill)
}
function clickSave(){
    cy.get(saveBtn).click()
}



function createReservation(){
    fillStartDate()
    fillEndDate()  
    selectClient()
    selectRoom()
    selectBill()
    clickSave()
}

module.exports={
    assertNewResPage,
    createReservation,
    
}