import { getReservations } from "./dataAccess.js";

export const Reservations = () => {
    const reservations = getReservations()
    const reservationHTML = `<ul> ${reservations.map(
        (reservation) => 
        `<li>
        Reservation for ${reservation.parentName}'s child ${reservation.childName} 
        and his ${reservation.numOfChildren-1} friends at ${reservation.address} for 
        ${reservation.reservationLength} hours on ${reservation.reservationDate}.
    </li>`).join("")}
    </ul>
    `
    return reservationHTML
}