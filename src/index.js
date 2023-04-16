import Waygd from "./assets/waygd.mp3";
import './styles/style.css';
import './styles/normalize-css.css';
import { taskMaker } from "./taskMaker";
import { cardMaker } from "./cardMaker";
import { pageMaker } from "./pageMaker";
import { importantMaker } from "./importantMaker";
import { deleteButton } from "./deleteButton";
import { checkboxListener } from "./checkboxListener";
import { changeObject, editButton } from "./editButton";
import { projectListener, projectButtonMaker } from "./projectMaker";

const audio = new Audio();
audio.src = Waygd;
const button = document.querySelector("#add-button");
const cancel = document.querySelector(".cancel");
const projects = document.getElementById("projects");
const closeProjects = document.getElementById("close");
const middle = document.querySelector(".middle");
const form = document.querySelector(".form");
const formTwo = document.querySelector(".editForm");
const projectForm = document.querySelector(".projectForm");
const formDiv = document.getElementById("myForm");
const projectDiv = document.querySelector(".projectName")
const all = document.getElementById("all");
const today = document.getElementById("today");
const week = document.getElementById("week");
const important = document.getElementById("important");
let taskList = [];
let dailies = [];
let weeklies = [];
let projectTasks = [];
let selected = false;
// localStorage.setItem('taskList', JSON.stringify(taskList))
// localStorage.setItem('dailies', JSON.stringify(dailies))
// localStorage.setItem('weeklies', JSON.stringify(weeklies))
// localStorage.setItem('projectTasks', JSON.stringify(projectTasks))
// console.log(localStorage.getItem("taskList"))
all.classList.add("selected");

function openForm() {
  formDiv.classList.remove("closed");
  formDiv.classList.add("opened");
  middle.classList.add("backdrop-blur");
};

function closeForm() {
  formDiv.classList.remove("opened");
  formDiv.classList.add("closed");
  middle.classList.remove("backdrop-blur");
  form.reset();
};

function openProjectForm() {
  projectDiv.classList.remove("closed");
  projectDiv.classList.add("opened");
};

export function closeProjectForm() {
  projectDiv.classList.add("closed");
  projectDiv.classList.remove("opened");
  projectForm.reset();
}

button.addEventListener("click", () => {
  audio.play();
  openForm();
  document.getElementById("title").focus();
});

cancel.addEventListener("click", closeForm); 

form.addEventListener("submit", (event) => {
  event.preventDefault();
  taskMaker(taskList, dailies, weeklies, projectTasks);
  cardMaker(taskList, projectTasks);
  deleteButton(taskList, dailies, weeklies, projectTasks);
  checkboxListener(taskList, dailies, weeklies, projectTasks);
  editButton(taskList, dailies, weeklies, projectTasks);
  closeForm();
  form.reset();
});

formTwo.addEventListener("submit", (e) => {
  e.preventDefault();
  let target = editButton(taskList, dailies, weeklies, projectTasks);
  let element = document.querySelector(".selected").getAttribute("id");
  changeObject(target, taskList, dailies, weeklies, projectTasks);
  if (element !== "important" && (element === "all" || element === "today" || element === "week")) pageMaker(taskList, dailies, weeklies, projectTasks, element, selected);
  else if (element === "important") importantMaker(taskList, dailies, weeklies, important, selected);
  else pageMaker(null, null, null, projectTasks, null, null);
});

projects.addEventListener("click", openProjectForm)
closeProjects.addEventListener("click", closeProjectForm)

projectForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("project").value;
  projectButtonMaker(name);
  projectListener(projectTasks);
  closeProjectForm();
})

if (!selected) all.onclick = function() {pageMaker(taskList, dailies, weeklies, projectTasks, all, selected)};
if (!today.classList.contains("selected")) today.onclick = function() {pageMaker(taskList, dailies, weeklies, projectTasks, today, selected)};
if (!week.classList.contains("selected")) week.onclick = function() {pageMaker(taskList, dailies, weeklies, projectTasks, week, selected)};
if (!important.classList.contains("selected")) important.onclick = function() {importantMaker(taskList, dailies, weeklies, projectTasks, important, selected)};