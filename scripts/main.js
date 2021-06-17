import { ButtonsAndLollipop } from "./ButtonsAndLollipop.js";
import { fetchReservations } from "./dataAccess.js";

const mainContainer = document.querySelector("#mainContainer")

mainContainer.addEventListener("stateChanged",

customEvent => {
    render()
})

const render = () => {
    fetchReservations().then(
        () => {
            mainContainer.innerHTML = ButtonsAndLollipop()
        }
    )
}
render()