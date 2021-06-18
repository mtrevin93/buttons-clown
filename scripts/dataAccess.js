const applicationState = {
    reservations: [],
    clowns: [],
    completions: []
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

export const fetchClowns = () => {
    return fetch(`${API}/clowns`)
    .then(response => response.json())
    .then(
        (clowns) => {
            applicationState.clowns = clowns
            
        }
    )
}

export const fetchCompletions = () => {
    return fetch(`${API}/completions`)
    .then(response => response.json())
    .then(
        (completions) => {
            applicationState.completions = completions
        }
    )
}

export const completeReservation = (clownId) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(clownId)
    }
    return fetch(`${API}/completions`, fetchOptions)
    .then(response => response.json())
    .then(
        () =>
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
)}


export const getReservations = () => {
    return applicationState.reservations.map(reservation => ({...reservation})
    )
}

export const getCompletions = () => {
    return applicationState.completions.map(completion => ({...completion}))
}

export const submitReservation = (userReservation) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userReservation)
    }
    return fetch(`${API}/reservations`, fetchOptions)
    .then(response => response.json())
    .then(
        () => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}

export const deleteReservation = (id) => {
    return fetch(`${API}/reservations/${id}`, 
    {method: "DELETE"})
        .then(
            () => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    }
    )
}

export const getClowns = () => {
    return applicationState.clowns.map(clown => ({...clown})
    )
}
