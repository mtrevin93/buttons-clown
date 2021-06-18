import { getReservations, deleteReservation, getClowns, completeReservation, getCompletions } from "./dataAccess.js";

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("reservation--")) {
        const [, reservationId] = click.target.id.split("--")
        deleteReservation(parseInt(reservationId))
    }
})

mainContainer.addEventListener("change", click => {
    if (click.target.value.startsWith("clown--")) {
        const [, clownId, reservationId] = click.target.value.split("--")
        const clowns = getClowns()
        const myClown = clowns.find(clown => (clown.id === parseInt(clownId)))
        const completedGigClownId = myClown.id
        const completedGigReservationId = parseInt(reservationId)
        const dataToSendToAPI = {
            clownId: completedGigClownId,
            partyId: completedGigReservationId,
            completionDate: Date.now().toString()
        }
        completeReservation(dataToSendToAPI)
        deleteReservation(parseInt(reservationId))
    }
})



export const Reservations = () => {
    const clowns = getClowns()
    const unsortedReservations = getReservations()
    const reservations = unsortedReservations.sort((a, b) => {
        return Math.abs(Date.now() - new Date(a.reservationDate)) - 
        Math.abs(Date.now() -new Date(b.reservationDate))
    })

    const reservationHTML = `<ul> ${reservations.map(
        (reservation) => {
        return `<li>
        Reservation for ${reservation.parentName}'s child ${reservation.childName} 
        and his ${reservation.numOfChildren-1} friends at ${reservation.address} for 
        ${reservation.reservationLength} hours on ${reservation.reservationDate}.
        <button class="reservation__delete" id="reservation--${reservation.id}">Delete</button>
        <select class="clowns" id="clowns">
    <option value="">Choose</option>
    ${
        clowns.map(
            (clown) => {
                return `<option value="clown--${clown.id}--${reservation.id}">${clown.name}</option>`
            }
        ).join("")
    }
</select>
    </li>`
}
    ).join("")
}
 </ul>`

      return reservationHTML
}

export const Completions = () => {
        const unsortedCompletions = getCompletions()
        const completions = unsortedCompletions.sort((a, b) => {
            return Math.abs(Date.now() - new Date(a.completionDate)) - 
            Math.abs(Date.now() -new Date(b.completionDate))
        })
        const clowns = getClowns()
        const completionHTML = `<ul> ${completions.map(
            (completion) => {
                const myClown = clowns.find(clown => clown.id === completion.clownId)
            return `<li>
            Party clowned by ${myClown.name} on ${completion.completionDate.toString()}
        </li>`
    }
        ).join("")
    }
     </ul>`
          return completionHTML
    }
