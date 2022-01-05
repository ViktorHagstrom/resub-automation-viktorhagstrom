/// <reference types="cypress" />

import * as indexFuncs from '../pages/indexPage'
import * as dashFuncs from '../pages/dashboardPage'
import * as roomFuncs from '../pages/rooms/roomsPage'
import * as newRoomFuncs from '../pages/rooms/createRoomPage'
import * as clientsFuncs from '../pages/clients/clientsPage'
import * as newClientsFuncs from '../pages/clients/newClientPage'
import * as billFuncs from '../pages/bills/billsPage'
import * as newBillFuncs from '../pages/bills/newBillsPage'
import * as reservationFuncs from '../pages/reservations/reservationsPage'
import * as newReservationFuncs from '../pages/reservations/newReservationPage'
import * as target from '../targets/targets'

describe ('Regression test suite', function(){

    beforeEach(function(){

        indexFuncs.login(cy)
        dashFuncs.dashCheckTitle(cy)
        dashFuncs.dashAssertUser(cy)
    });
    afterEach(function(){

        dashFuncs.dashLogOut(cy)
        indexFuncs.indexCheckTitle(cy)
    });

    it('T1: Confirm test data', function(){

        dashFuncs.checkDashboard(target.dashInfo)
    })
    it('T2: Create room', function(){
        dashFuncs.goToRooms(cy)
        roomFuncs.assertRooms(cy)
        roomFuncs.createRoom(cy)
        newRoomFuncs.assertNewRoomPage(cy)
        newRoomFuncs.createRoom(cy)
        roomFuncs.assertRooms(cy)
        roomFuncs.assertNewRoomCreated(cy)
        roomFuncs.deleteRoom3(cy)
        roomFuncs.assertRoom3Deleted(cy)
        roomFuncs.leaveRoomPage(cy)
        dashFuncs.dashCheckTitle(cy)
    })
    it('T3: Create client', function(){
        dashFuncs.goToClients(cy)
        clientsFuncs.assertClientsPage(cy)
        clientsFuncs.goToCreateClient(cy)
        newClientsFuncs.assertNewClientPage(cy)
        newClientsFuncs.createNewClient(cy)
        clientsFuncs.assertNewClient(cy)
        clientsFuncs.deleteClient()
        clientsFuncs.assertClientDeleted()
        clientsFuncs.leaveClientsPage()
        dashFuncs.dashCheckTitle()
    })
    it('T4: Create bill', function(){
        dashFuncs.goToBills()
        billFuncs.assertBillPage()
        billFuncs.createBill()
        newBillFuncs.assertNewBillPage()
        newBillFuncs.createBill()
        billFuncs.assertAndDeleteNewBill()
        billFuncs.leaveBillPage()
        dashFuncs.dashCheckTitle()
     })
     it('T5: Create reservation', function(){
        dashFuncs.goToRerservation()
        reservationFuncs.assertReservationsPage()
        reservationFuncs.goToCreateReservation()
        newReservationFuncs.createReservation()
        reservationFuncs.assertReservation2Created()
        reservationFuncs.deleteReservation2()
        reservationFuncs.leaveReservations()
        dashFuncs.dashCheckTitle()
       })




})