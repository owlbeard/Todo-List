import { checkboxListener } from "./checkboxListener";
import { deleteButton } from "./deleteButton";
import { selector } from "./selector";
import { editButton } from "./editButton";

export function importantMaker(array, arrayTwo, arrayThree, arrayFour, element, variable) {
  selector(element, variable); 
  const container = document.querySelector(".taskContainer");
  const children = Array.from(container.childNodes);
  for (let i = 0; i < children.length; i++) {
    container.removeChild(container.lastChild);
  };
  let titleExpand = false;
  let descExpand = false;
  for(let i = 0; i < array.length; i++) {
    if (array[i].importance === "true" || array[i].importance === true) {
      let div = document.createElement("div");
      let label = document.createElement("label");
      let input = document.createElement("input");
      let deleteButton = document.createElement("button");
      let editButton = document.createElement("button");
      let titleP = document.createElement("p");
      let descP = document.createElement("p");
      let dateP = document.createElement("p");
    
      div.classList.add("task");
      div.setAttribute("data-index", `${i}`);
      container.append(div);
      
      let task = document.querySelector(`[data-index="${i}"]`);
      titleP.classList.add("cardText");
      descP.classList.add("cardText");
      dateP.classList.add("cardText");
      titleP.setAttribute("data-title", `${i}`);
      descP.setAttribute("data-desc", `${i}`);
      dateP.setAttribute("data-date", `${i}`);
      let date = new Date(array[i].date);
      let dd = String(date.getDate()).padStart(2, '0');
      let mm = String(date.getMonth() + 1).padStart(2, '0');
      let yyyy = date.getFullYear();

      task.append(titleP);
      task.append(descP);
      task.append(dateP);

      let titleSelect = document.querySelector(`[data-title="${i}"]`)
      let descSelect = document.querySelector(`[data-desc="${i}"]`)
      let dateSelect = document.querySelector(`[data-date="${i}"]`)
      titleSelect.textContent = `${array[i].title}`;
      descSelect.textContent += `${array[i].description}`;
      dateSelect.textContent += `Due: ${dd}.` + `${mm}.` + `${yyyy}`;

      titleSelect.addEventListener("click", (e) => {
        if (e.target.offsetWidth < e.target.scrollWidth && !titleExpand) {
          titleSelect.classList.add("expandTitle")
          titleExpand = true
        }else {
          titleSelect.classList.remove("expandTitle")
          titleExpand = false
        }  
      })
  
      descSelect.addEventListener("click", (e) => {
        if (e.target.offsetWidth < e.target.scrollWidth && !descExpand) {
          descSelect.classList.add("expandDesc")
          descExpand = true
        }else {
          descSelect.classList.remove("expandDesc")
          descExpand = false
        } 
      })

      label.classList.add("textBox");
      label.setAttribute("data-label", `${i}`);
      input.setAttribute("id", "textMark");
      input.setAttribute("type", "checkbox");
      input.setAttribute("data-input", `${i}`);
      if (array[i].importance === "true" || array[i].importance === true) {
        input.setAttribute("checked", "checked");
        task.classList.add("importantTask")
      }else {
        input.removeAttribute("checked");
      };
      task.append(label);
      
      let labelSelect = document.querySelector(`[data-label="${i}"]`);
      
      labelSelect.textContent = "Important?";
      labelSelect.append(input);
      
      deleteButton.classList.add("deleteButton");
      deleteButton.setAttribute("data-trash", `${i}`);
      editButton.classList.add("editButton");
      editButton.setAttribute("data-edit", `${i}`);
      task.append(deleteButton);
      task.append(editButton);
    };  
  };
  deleteButton(array, arrayTwo, arrayThree, arrayFour);
  editButton(array, arrayTwo, arrayThree, arrayFour);
  checkboxListener(array, arrayTwo, arrayThree, arrayFour, element);
}