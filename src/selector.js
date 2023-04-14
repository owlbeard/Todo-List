export function selector(element, variable) {
  const all = document.getElementById("all");
  const today = document.getElementById("today");
  const week = document.getElementById("week");
  const important = document.getElementById("important");
  if (element === all) {
    all.classList.add("selected")
    today.classList.remove("selected")
    week.classList.remove("selected")
    important.classList.remove("selected")
    variable = true;
  }
  if (element === today) {
    today.classList.add("selected")
    all.classList.remove("selected")
    week.classList.remove("selected")
    important.classList.remove("selected")
    variable = false;
  }
  if (element === week) {
    week.classList.add("selected")
    today.classList.remove("selected")
    all.classList.remove("selected")
    important.classList.remove("selected")
    variable = false;
  }
  if (element === important) {
    important.classList.add("selected")
    today.classList.remove("selected")
    week.classList.remove("selected")
    all.classList.remove("selected")
    variable = false;
  }
  return document.querySelector(".selected");   
}  