import Waygd from "./assets/waygd.mp3"
import './styles/style.css';
import './styles/normalize-css.css';
import { taskMaker } from "./taskMaker";
import { cardMaker } from "./cardMaker";
import { pageMaker } from "./pageMaker";
import { importantMaker } from "./importantMaker";
import { deleteButton } from "./deleteButton";
import { checkboxListener } from "./checkboxListener";

const audio = new Audio();
audio.src = Waygd
const button = document.querySelector("#add-button");
const cancel = document.querySelector(".cancel");
const middle = document.querySelector(".middle")
const form = document.querySelector(".form");
const formDiv = document.getElementById("myForm")
const all = document.getElementById("all");
const today = document.getElementById("today");
const week = document.getElementById("week");
const important = document.getElementById("important");
let taskList = [];
let dailies = [];
let weeklies = [];
let selected = false;

function openForm() {
  formDiv.classList.remove("closed");
  formDiv.classList.add("opened");
  middle.classList.add("backdrop-blur");
}

function closeForm() {
  formDiv.classList.remove("opened");
  formDiv.classList.add("closed");
  middle.classList.remove("backdrop-blur");
  form.reset();
}

button.addEventListener("click", () => {
  audio.play();
  openForm();
});

cancel.addEventListener("click", closeForm); 

form.addEventListener("submit", (event) => {
  event.preventDefault();
  taskMaker(taskList, dailies, weeklies);
  cardMaker(taskList, all, selected);
  deleteButton(taskList, dailies, weeklies);
  checkboxListener(taskList, dailies, weeklies, all)
  closeForm();
  form.reset();
});

if (!selected) all.onclick = function() {pageMaker(taskList, dailies, weeklies, all, selected)};
if (!today.classList.contains("selected")) today.onclick = function() {pageMaker(taskList, dailies, weeklies, today, selected)};
if (!week.classList.contains("selected")) week.onclick = function() {pageMaker(taskList, dailies, weeklies, week, selected)};
if (!important.classList.contains("selected")) important.onclick = function() {importantMaker(taskList, dailies, weeklies, important, selected)};