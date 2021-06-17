import { submitReservation } from "./dataAccess.js"

const mainContainer = document.querySelector("#mainContainer")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitReservation") {
        const inputParentName = document.querySelector("input[name='parentName']").value
        const inputChildName = document.querySelector("input[name='childName']").value
        const inputNumOfChildren = document.querySelector("input[name='numOfChildren']").value
        const inputAddress = document.querySelector("input[name='address']").value
        const inputReservationDate = document.querySelector("input[name='reservationDate']").value
        
        // Validates that the input string is a valid date formatted as "yyyy-mm-dd"
function isValidDate(dateString)
{
    // First check for the pattern
    if(!/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(dateString))
        return false;
    // Parse the date parts to integers
    var parts = dateString.split("-");
    var day = parseInt(parts[2], 10);
    var month = parseInt(parts[1], 10);
    var year = parseInt(parts[0], 10);

    // Check the ranges of month and year
    if(year < 1000 || year > 3000 || month == 0 || month > 12)
        return false;

    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    // Adjust for leap years
    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        monthLength[1] = 29;

    // Check the range of the day
    return day > 0 && day <= monthLength[month - 1];
};
if (isValidDate(inputReservationDate) === false){
    window.alert(`Please input date in valid format`).
    return
}

        const inputReservationLength = document.querySelector("input[name='reservationLength']").value
    
    const dataToSendToAPI = {
       parentName: inputParentName,
       childName: inputChildName,
       numOfChildren: inputNumOfChildren,
       address: inputAddress,
       reservationDate: inputReservationDate,
       reservationLength: inputReservationLength
    }

    submitReservation(dataToSendToAPI)
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
            <label class="label" for="reservationDate">Reservation Date in yyyy-mm-dd</label>
            <input type="text" name="reservationDate" class="input"/>
        </div>
        <div class="field">
            <label class="label" for="reservationLength">How many hours?</label>
            <input type="text" name="reservationLength" class="input"/>

            <button class="button" id="submitReservation">Submit Reservation</button>
    `
    return html
}