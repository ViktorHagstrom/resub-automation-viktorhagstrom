/// <reference types="cypress" />

//Elements
    //Fields
const nRoomTitle = 'Testers Hotel'
const nRoomAssert = 'New Room'
const categoryField=':nth-child(1) > select'
const numberField =':nth-child(2) > input'
const floorField=':nth-child(3) > input'
const avaliableBox='.checkbox'
const priceField=':nth-child(5) > input'
const featuresField=':nth-child(6) > select'
const featBalcony ='Balcony'
const featEnsuite='Ensuite'
const featSeaView='Sea View'
const featPenthouse='Penthouse'
const backBtn='[href="/rooms"]'
const saveBtn='.blue'
const featuresArray=[featBalcony,featEnsuite,featSeaView,featPenthouse]
    //Inputs
const price ='2500'
const category='Double'
const roomNumber='103'
const floorNumber='1'
//Actions

function assertNewRoomPage(cy){
    cy.contains(nRoomAssert)
    cy.title().should('eq',nRoomTitle)
}
function createRoom(cy){
    cy.get(categoryField).select(category)
    cy.get(numberField).type(roomNumber)
    cy.get(floorField).type(floorNumber)
    cy.get(avaliableBox).click()
    cy.get(priceField).type(price)
    cy.get(featuresField).select(featuresArray)
    cy.get(saveBtn).click()
}
//Export
module.exports = {
    assertNewRoomPage,
    createRoom

}