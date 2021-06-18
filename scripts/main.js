import { ButtonsAndLollipop } from "./ButtonsAndLollipop.js";
import { fetchReservations, fetchClowns } from "./dataAccess.js";

const mainContainer = document.querySelector("#mainContainer")

mainContainer.addEventListener("stateChanged",

customEvent => {
    render()
})

const render = () => {
    fetchReservations()
    fetchClowns()
    .then(
        () => {
            mainContainer.innerHTML = ButtonsAndLollipop()
        }
    )
}
render()


