const all = document.getElementById("all");
const today = document.getElementById("today");
const week = document.getElementById("week");
const important = document.getElementById("important");
let mainCategories = [all, today, week, important];
function projectMaker(e) {
  let projects = Array.from(document.getElementsByClassName("proj"));
  for (let i = 0; i < projects.length; i++) {
    projects[i].classList.remove("selected");
  }  
  for (let i = 0; i < mainCategories.length; i++) {
    mainCategories[i].classList.remove("selected");
  }  
  let project = e.target
  project.classList.add("selected");
}

export function projectListener() {
  let projects = Array.from(document.getElementsByClassName("proj"));
  for (let i = 0; i < projects.length; i++) {
    projects[i].addEventListener("click", projectMaker)
  }
}