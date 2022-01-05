/// <reference types="cypress" />

import * as target from '../../targets/targets'

const billsHeader='Bills'
const createBillBtn='h2 > .btn'
const leaveBills=':nth-child(3) > .btn'
const bill2Div='.bills > :nth-child(2)'
const optionsBill2=':nth-child(2) > .action > img'
const deleteOptionBill2='.menu > :nth-child(2)'


function assertBillPage(){
    cy.contains(billsHeader)
}
function confirmNewBill(){
    cy.get(bill2Div).should('contain', target.billTotal)
}
function deleteBill2(){
    cy.get(optionsBill2).click()
    cy.get(deleteOptionBill2).click()
}
function assertBill2Deleted(){
    cy.get(bill2Div).should('not.exist')
}
function leaveBillPage(){
    cy.get(leaveBills).click()
}
function createBill(){
    cy.get(createBillBtn).click()
}

function assertAndDeleteNewBill(){
    confirmNewBill()
    deleteBill2()
    assertBill2Deleted()
}


module.exports={
    assertBillPage,
    confirmNewBill,
    deleteBill2,
    createBill,
    assertAndDeleteNewBill,
    leaveBillPage
    
}