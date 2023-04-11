import Waygd from "./assets/waygd.mp3"
import './styles/style.css';
import './styles/normalize-css.css';
import { taskMaker } from "./taskMaker";
import { cardMaker } from "./cardMaker";

const audio = new Audio();
audio.src = Waygd
const button = document.querySelector("#add-button");
const cancel = document.querySelector(".cancel");
const middle = document.querySelector(".middle")
const form = document.querySelector("form");
const all = document.getElementById("all");
let taskList = [];
let dailies = [];
let weeklies = [];
let importantTasks = []

/* Displaying the form whenever the user clicks the + sign on top of the screen. */
function openForm() {
  document.getElementById("myForm").classList.remove("closed");
  document.getElementById("myForm").classList.add("opened");
  middle.classList.add("backdrop-blur");
}
/* Hiding the form whenever the user clicks the close button on form or anywhere on container area */
function closeForm() {
  document.getElementById("myForm").classList.remove("opened");
  document.getElementById("myForm").classList.add("closed");
  middle.classList.remove("backdrop-blur");
  form.reset();
}

cancel.addEventListener("click", closeForm); 

button.addEventListener("click", () => {
  audio.play();
  openForm();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  taskMaker(taskList, dailies, weeklies, importantTasks);
  cardMaker(taskList);
  closeForm();
  form.reset();
});