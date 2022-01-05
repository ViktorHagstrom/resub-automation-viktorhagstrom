/// <reference types="cypress" />

//Elements
const roomTitle = 'Testers Hotel'
const roomHeader = 'Rooms'
const createRoomBtn = 'h2 > .btn'
const roomBackBtn = ':nth-child(3) > .btn'
const room3Identifier ='Floor 1, Room 103'
const room3Div='.rooms > :nth-child(3)'
const room3Options=':nth-child(3) > .action'
const room3Delete='#app > div > div.rooms > div:nth-child(3) > div.menu > a:nth-child(2)'

//Actions
function assertRooms(){
cy.contains(roomHeader)
}
function createRoom(){
    cy.get(createRoomBtn).click()
}
function assertNewRoomCreated(){
    cy.contains(room3Identifier)
}
function deleteRoom3(){
    cy.get(room3Options).click()
    cy.get(room3Delete).click()
}
function assertRoom3Deleted(){
    cy.get(room3Div).should('not.exist')
}
function leaveRoomPage(){
    cy.get(roomBackBtn).click()
}

//Exports
module.exports = {
    assertRooms,
    createRoom,
    assertNewRoomCreated,
    deleteRoom3,
    assertRoom3Deleted,
    leaveRoomPage
}