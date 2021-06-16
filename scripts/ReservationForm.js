import { sendRequest } from "./dataAccess.js"

const mainContainer = document.querySelector("#mainContainer")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitReservation") {
        const inputParentName = document.querySelector("input[name='parentName']").value
        const inputChildName = document.querySelector("input[name='childName']").value
        const inputNumOfChildren = document.querySelector("input[name='numOfChildren']").value
        const inputAddress = document.querySelector("input[name='address']").value
        const inputReservationDate = document.querySelector("input[name='reservationDate']").value
        const inputReservationLength = document.querySelector("input[name='reservationLength']").value
    
    const dataToSendToAPI = {
       parentName: inputParentName,
       childName: inputChildName,
       numOfChildren: inputNumOfChildren,
       address: inputAddress,
       reservationDate: inputReservationDate,
       reservationLength: inputReservationLength
    }

    sendRequest(dataToSendToAPI)
}
})

export const ReservationForm = () => {
    let html = `
        <div class ="field">
            <label class="label" for="parentName">Parent Name</label>
            <input type="text" name="parentName" class="input"/>
        </div>
        <div class = "field">
            <label class="label" for="childName">Child Name</label>
            <input type="text" name="childName" class="input"/>
        </div>
        <div class="field">
            <label class="label" for="numOfChildren">How many children?</label>
            <input type="text" name="numOfChildren" class="input"/>
        </div>
        <div class="field">
            <label class="label" for="address">Where?</label>
            <input type="text" name="address" class="input"/>
        </div>
        <div class="field">
            <label class="label" for="reservationDate">Reservation Date</label>
            <input type="text" name="reservationDate" class="input"/>
        </div>
        <div class="field">
            <label class="label" for="reservationLength">How many hours?</label>
            <input type="text" name="reservationLength" class="input"/>

            <button class="button" id="submitReservation">Submit Reservation</button>
    `
    return html
}