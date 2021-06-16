import { ButtonsAndLeslie } from "./ButtonsAndLeslie.js";
import { fetchReservations } from "./dataAccess.js";

const mainContainer = document.querySelector("#mainContainer")

const render = () => {
    fetchReservations().then(
        () => {
            mainContainer.innerHTML = ButtonsAndLeslie()
        }
    )
}
render()