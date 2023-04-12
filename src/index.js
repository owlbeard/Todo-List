import Waygd from "./assets/waygd.mp3"
import './styles/style.css';
import './styles/normalize-css.css';
import { taskMaker } from "./taskMaker";
import { cardMaker } from "./cardMaker";
import { pageMaker } from "./pageMaker";
import { importantMaker } from "./importantMaker";

const audio = new Audio();
audio.src = Waygd
const button = document.querySelector("#add-button");
const cancel = document.querySelector(".cancel");
const middle = document.querySelector(".middle")
const form = document.querySelector("form");
const all = document.getElementById("all");
const today = document.getElementById("today");
const week = document.getElementById("week");
const important = document.getElementById("important");
let taskList = [];
let dailies = [];
let weeklies = [];
let selected = false;

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
  taskMaker(taskList, dailies, weeklies);
  cardMaker(taskList, dailies, weeklies);
  closeForm();
  form.reset();
});

if (!selected) all.onclick = function() {pageMaker(taskList, dailies, weeklies, all, selected)};
if (!today.classList.contains("selected")) today.onclick = function() {pageMaker(dailies, taskList, weeklies, today, selected)};
if (!week.classList.contains("selected")) week.onclick = function() {pageMaker(weeklies, taskList, dailies, week, selected)};
if (!important.classList.contains("selected")) important.onclick = function() {importantMaker(taskList, dailies, weeklies, selected)};