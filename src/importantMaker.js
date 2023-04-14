import { checkboxListener } from "./checkboxListener";
import { deleteButton } from "./deleteButton";
import { selector } from "./selector";

export function importantMaker(array, arrayTwo, arrayThree, element, variable) {
  const container = document.querySelector(".taskContainer")
  const children = Array.from(container.childNodes);
  for (let i = 0; i < children.length; i++) {
    container.removeChild(container.lastChild);
  }
  for(let i = 0; i < array.length; i++) {
    if (array[i].importance === "true") {
      let div = document.createElement("div");
      let label = document.createElement("label");
      let input = document.createElement("input");
      let deleteButton = document.createElement("button");
      div.classList.add("task");
      div.setAttribute("data-index", `${i}`);
      container.appendChild(div);
      let task = document.querySelector(`[data-index="${i}"]`);
      task.textContent = `${array[i].title}\r\n\r\n`;
      task.textContent += `${array[i].description}\r\n\r\n`;
      let date = new Date(array[i].date)
      let dd = String(date.getDate()).padStart(2, '0');
      let mm = String(date.getMonth() + 1).padStart(2, '0');
      let yyyy = date.getFullYear();
      task.textContent += `Due: ${dd}.` + `${mm}.` + `${yyyy}\r\n\r\n`;
      
      label.classList.add("textBox")
      label.setAttribute("data-label", `${i}`);
      input.setAttribute("id", "textMark")
      input.setAttribute("type", "checkbox");
      input.setAttribute("data-input", `${i}`);
      if (array[i].importance === "true") {
        input.setAttribute("checked", "checked")
      }else {
        input.removeAttribute("checked");
      }
      task.append(label);
      
      let labelSelect = document.querySelector(`[data-label="${i}"]`);
      
      labelSelect.textContent = "Important?";
      labelSelect.append(input);
      
      deleteButton.classList.add("deleteButton");
      deleteButton.setAttribute("data-trash", `${i}`);
      task.append(deleteButton);
    }  
  }
  deleteButton(array, arrayTwo, arrayThree);
  checkboxListener(array, arrayTwo, arrayThree, element);
  selector(element, variable); 
}