/// <reference types="cypress" />

import * as target from '../../targets/targets'

const reservationsHeader='Reservations'
const createReservationBtn='h2 > .btn'
const reservation2Div='.reservations > :nth-child(2)'
const reservation2Opt=':nth-child(2) > .action > img'
const reservation2Del='.menu > :nth-child(2)'
const backBtn=':nth-child(3) > .btn'
const reservationsView='#app > :nth-child(2)'



function assertReservationsPage(){
    cy.contains(reservationsHeader)
}

function assertReservation2Created(){
    cy.get(reservation2Div).should('exist')
}
function goToCreateReservation(){
    cy.get(createReservationBtn).click()
}
function deleteReservation2(){
    cy.get(reservation2Opt).click()
    cy.get(reservation2Del).click()
    cy.get(reservationsView).should('not.contain',reservation2Div)
}
function leaveReservations(){
    cy.get(backBtn).click()
}


module.exports={
    assertReservationsPage,
    assertReservation2Created,
    goToCreateReservation,
    deleteReservation2,
    leaveReservations

}
