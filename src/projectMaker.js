import { pageMaker } from "./pageMaker";

const all = document.getElementById("all");
const today = document.getElementById("today");
const week = document.getElementById("week");
const important = document.getElementById("important");
let mainCategories = [all, today, week, important];
let projectNumber = 0;

export function projectButtonMaker(name) {
  let projectButton = document.createElement("button");
  let deleteButton = document.createElement("button");
  projectButton.setAttribute("id", `${name}`);
  projectButton.setAttribute("data-project", `${projectNumber}`);
  projectButton.textContent = `${name}`;
  document.querySelector(".projects").append(projectButton)
  let project = document.querySelector(`[data-project="${projectNumber}"]`)
  deleteButton.classList.add("projDel");
  deleteButton.setAttribute("data-projTrash", `${projectNumber}`)
  project.append(deleteButton);
  projectNumber++;

}


function projectMaker(e) {
  let projects = Array.from(document.querySelectorAll("[data-project]"));
  for (let i = 0; i < projects.length; i++) {
    projects[i].classList.remove("selected");
  };  
  for (let i = 0; i < mainCategories.length; i++) {
    mainCategories[i].classList.remove("selected");
  };
  let project = e.target
  project.classList.add("selected");
};

function deleteProject(e, array) {
  let selected = document.querySelector(".selected").getAttribute("id");
  let projectIndex = e.target.getAttribute("data-projTrash")
  let project = document.querySelector(`[data-project="${projectIndex}"]`)
  let projectName = project.getAttribute("id");
  project.remove();
  if (selected === projectName) {
    const container = document.querySelector(".taskContainer");
    const children = Array.from(container.childNodes);
    for (let i = 0; i < children.length; i++) {
      container.removeChild(container.lastChild);
    };
  }  
  for (let i = 0; i < array.length; i++) {
    console.log(projectName);
    console.log(array[i].projectName);
    if (array[i].projectName === projectName) {
      let index = array.indexOf(array[i])
      array.splice(index, 1);
      console.log(array);
    }
  }
  
}


export function projectListener(array) {
  let projects = Array.from(document.querySelectorAll("[data-project]"));
  for (let i = 0; i < projects.length; i++) {
    projects[i].addEventListener("click", (e) => {
      if (!e.target.classList.contains("projDel")) {
        projectMaker(e);
        pageMaker(null, null, null, array, null, null);
      }else {
        deleteProject(e, array);
      }  
    })
  }  
};