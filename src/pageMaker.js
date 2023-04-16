import { checkboxListener } from "./checkboxListener";
import { deleteButton } from "./deleteButton";
import { editButton } from "./editButton";
import { selector } from "./selector";  

export function pageMaker(array, arrayTwo, arrayThree, arrayFour, element, variable) {
  if (element !== null && variable !== null) selector(element, variable);
  let selected = document.querySelector(".selected");
  let idName = selected.getAttribute("id")
  let iterate = null;
  if (idName === "all") iterate = array;
  else if (idName === "today") iterate = arrayTwo;
  else if (idName === "week") iterate = arrayThree;
  else iterate = null;
  
  const container = document.querySelector(".taskContainer");
  const children = Array.from(container.childNodes);
  for (let i = 0; i < children.length; i++) {
    container.removeChild(container.lastChild);
  };
  if (idName === "all" || idName === "today" || idName === "week") {
    for(let i = 0; i < iterate.length; i++) {
      let div = document.createElement("div");
      let label = document.createElement("label");
      let input = document.createElement("input");
      let deleteButton = document.createElement("button");
      let editButton = document.createElement("button");
      div.classList.add("task");
      div.setAttribute("data-index", `${i}`);
      container.appendChild(div);
      let task = document.querySelector(`[data-index="${i}"]`);
      task.textContent = `${iterate[i].title}\r\n\r\n`;
      task.textContent += `${iterate[i].description}\r\n\r\n`;
      let date = new Date(iterate[i].date);
      let dd = String(date.getDate()).padStart(2, '0');
      let mm = String(date.getMonth() + 1).padStart(2, '0');
      let yyyy = date.getFullYear();
      task.textContent += `Due: ${dd}.` + `${mm}.` + `${yyyy}\r\n\r\n`;
      
      label.classList.add("textBox");
      label.setAttribute("data-label", `${i}`);
      input.setAttribute("id", "textMark");
      input.setAttribute("type", "checkbox");
      input.setAttribute("data-input", `${i}`);
      if (iterate[i].importance === "true" || iterate[i].importance === true) {
        input.setAttribute("checked", "checked");
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
    }
  }else {
    for(let i = 0; i < arrayFour.length; i++) {
      if (arrayFour[i].projectName === idName) {
        let div = document.createElement("div");
        let label = document.createElement("label");
        let input = document.createElement("input");
        let deleteButton = document.createElement("button");
        let editButton = document.createElement("button");
        div.classList.add("task");
        div.setAttribute("data-index", `${i}`);
        container.appendChild(div);
        let task = document.querySelector(`[data-index="${i}"]`);
        task.textContent = `${arrayFour[i].title}\r\n\r\n`;
        task.textContent += `${arrayFour[i].description}\r\n\r\n`;
        let date = new Date(arrayFour[i].date);
        let dd = String(date.getDate()).padStart(2, '0');
        let mm = String(date.getMonth() + 1).padStart(2, '0');
        let yyyy = date.getFullYear();
        task.textContent += `Due: ${dd}.` + `${mm}.` + `${yyyy}\r\n\r\n`;
        
        label.classList.add("textBox");
        label.setAttribute("data-label", `${i}`);
        input.setAttribute("id", "textMark");
        input.setAttribute("type", "checkbox");
        input.setAttribute("data-input", `${i}`);
        if (arrayFour[i].importance === "true" || arrayFour[i].importance === true) {
          input.setAttribute("checked", "checked");
        }else {
          input.removeAttribute("checked");
        }
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
  } 
  deleteButton(array, arrayTwo, arrayThree, arrayFour);
  editButton(array, arrayTwo, arrayThree, arrayFour);
  checkboxListener(array, arrayTwo, arrayThree, arrayFour);
};