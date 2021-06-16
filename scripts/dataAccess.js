const applicationState = {
    reservations: []
}
const API = "http://localhost:8088"

export const fetchReservations = () => {
    return fetch(`${API}/reservations`)
        .then(response => response.json())
        .then(
            (reservations) => {
                applicationState.reservations = reservations
            }
        )
}

export const getReservations = () => {
    return applicationState.reservations.map(reservation => ({...reservation})
    )
}