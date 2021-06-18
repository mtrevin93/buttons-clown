import { Reservations } from "./Reservations.js";
import { ReservationForm } from "./ReservationForm.js";
import { Completions } from "./Reservations.js"

export const ButtonsAndLollipop = () => {
    const htmlString = `
    <h1>Buttons and Leslie's Kid's Birthday Parties</h1>
    <section class="reservationForm">
    ${ReservationForm()}
    </section>
    <section class="reservations">
    <h2>Current Reservations</h2>
    ${Reservations()}
    </section>
    <section class="completions">
    <h2>Completed Events</h2>
    ${Completions()}
    `
    return htmlString
}