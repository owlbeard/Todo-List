export function cardMaker(array, arrayTwo) {
  let div = document.createElement("div");
  const container = document.querySelector(".taskContainer");
  let selected = document.querySelector(".selected").getAttribute("id")
  if (selected === "all" || selected === "today" || selected === "week" || selected === "important") {
    array.forEach((value, index) => {
      let label = document.createElement("label");
      let input = document.createElement("input");
      let deleteButton = document.createElement("button");
      let editButton = document.createElement("button");
      div.classList.add("task");
      div.setAttribute("data-index", `${index}`);
      container.append(div);
      let task = document.querySelector(`[data-index="${index}"]`);
      task.textContent = `${value.title}\r\n\r\n`;
      task.textContent += `${value.description}\r\n\r\n`;
      let date = new Date(value.date);
      let dd = String(date.getDate()).padStart(2, '0');
      let mm = String(date.getMonth() + 1).padStart(2, '0');
      let yyyy = date.getFullYear();
      task.textContent += `Due: ${dd}.` + `${mm}.` + `${yyyy}\r\n\r\n`;
      
      label.classList.add("textBox");
      label.setAttribute("data-label", `${index}`);
      input.setAttribute("id", "textMark");
      input.setAttribute("type", "checkbox");
      input.setAttribute("data-input", `${index}`);
      if (value.importance === "true" || value.importance === true) {
        input.setAttribute("checked", "checked");
      }else {
        input.removeAttribute("checked");
      };
      task.append(label);
      
      let labelSelect = document.querySelector(`[data-label="${index}"]`);
      
      labelSelect.textContent = "Important?";
      labelSelect.append(input);
      
      deleteButton.classList.add("deleteButton");
      deleteButton.setAttribute("data-trash", `${index}`);
      editButton.classList.add("editButton");
      editButton.setAttribute("data-edit", `${index}`);
      task.append(deleteButton);
      task.append(editButton);
    })
  }else {
    arrayTwo.forEach((value, index) => {
      let label = document.createElement("label");
      let input = document.createElement("input");
      let deleteButton = document.createElement("button");
      let editButton = document.createElement("button");
      div.classList.add("task");
      div.setAttribute("data-index", `${index}`);
      container.append(div);
      let task = document.querySelector(`[data-index="${index}"]`);
      task.textContent = `${value.title}\r\n\r\n`;
      task.textContent += `${value.description}\r\n\r\n`;
      let date = new Date(value.date);
      let dd = String(date.getDate()).padStart(2, '0');
      let mm = String(date.getMonth() + 1).padStart(2, '0');
      let yyyy = date.getFullYear();
      task.textContent += `Due: ${dd}.` + `${mm}.` + `${yyyy}\r\n\r\n`;
      
      label.classList.add("textBox");
      label.setAttribute("data-label", `${index}`);
      input.setAttribute("id", "textMark");
      input.setAttribute("type", "checkbox");
      input.setAttribute("data-input", `${index}`);
      if (value.importance === "true" || value.importance === true) {
        input.setAttribute("checked", "checked");
      }else {
        input.removeAttribute("checked");
      };
      task.append(label);
      
      let labelSelect = document.querySelector(`[data-label="${index}"]`);
      
      labelSelect.textContent = "Important?";
      labelSelect.append(input);
      
      deleteButton.classList.add("deleteButton");
      deleteButton.setAttribute("data-trash", `${index}`);
      editButton.classList.add("editButton");
      editButton.setAttribute("data-edit", `${index}`);
      task.append(deleteButton);
      task.append(editButton);
    })
  }  
}