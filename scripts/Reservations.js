import { getReservations, deleteReservation } from "./dataAccess.js";

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("reservation--")) {
        const [, reservationId] = click.target.id.split("--")
        deleteReservation(parseInt(reservationId))
    }
})

export const Reservations = () => {
    const reservations = getReservations()
    const reservationHTML = `<ul> ${reservations.map(
        (reservation) => 
        `<li>
        Reservation for ${reservation.parentName}'s child ${reservation.childName} 
        and his ${reservation.numOfChildren-1} friends at ${reservation.address} for 
        ${reservation.reservationLength} hours on ${reservation.reservationDate}.
        <button class="reservation__delete" id="reservation--${reservation.id}">Delete</button>
    </li>`).join("")}
    </ul>
    `
    return reservationHTML
}