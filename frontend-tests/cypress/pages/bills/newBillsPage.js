/// <reference types="cypress" />

import * as target from '../../targets/targets'

const newBillHeader='New Bill'
const valueField='input'
const paidCheck='.checkbox'
const leavePage='[href="/bills"]'
const saveBtn='.blue'

function assertNewBillPage(){
    cy.contains(newBillHeader)
}
function fillPrice(){
    cy.get(valueField).type(target.billTotal)
}
function checkPaidBox(){
    cy.get(paidCheck).click()
}
function confirmRoom(){
    cy.get(saveBtn).click()
}

function createBill(){
    fillPrice()
    checkPaidBox()
    confirmRoom()


}

module.exports={
    assertNewBillPage,
    createBill
}