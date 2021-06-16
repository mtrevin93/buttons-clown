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

export const sendRequest = (userReservation) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userReservation)
    }
}