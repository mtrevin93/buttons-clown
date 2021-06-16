import { Reservations } from "./Reservations.js";

export const ButtonsAndLeslie = () => {
    const htmlString = `
    <h1>Buttons and Leslie's Kid's Birthday Parties</h1>
    <section class="reservationForm">
    </section>
    Reservation form here
    <section class="reservations">
    <h2>Current Reservations</h2>
    ${Reservations()}
    </section>
    `
    return htmlString
}