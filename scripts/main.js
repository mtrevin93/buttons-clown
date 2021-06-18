import { ButtonsAndLollipop } from "./ButtonsAndLollipop.js";
import { fetchReservations, fetchClowns, fetchCompletions } from "./dataAccess.js";

const mainContainer = document.querySelector("#mainContainer")

mainContainer.addEventListener("stateChanged",

customEvent => {
    render()
})

const render = () => {
    fetchReservations()
    fetchClowns()
    fetchCompletions()
    .then(
        () => {
            mainContainer.innerHTML = ButtonsAndLollipop()
        }
    )
}
render()


