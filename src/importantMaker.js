export function importantMaker(array, arrayTwo, arrayThree, variable) {
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
      let button = document.createElement("button");
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
      /* Again, declaring the variable after appending the label element, to not get "null" as a selector value. */
      let labelSelect = document.querySelector(`[data-label="${i}"]`);
      
      labelSelect.textContent = "Important?";
      labelSelect.append(input);
      
      button.classList.add("deleteButton");
      button.setAttribute("data-trash", `${i}`);
      task.append(button);
    }  
  }
  let buttonSelect = Array.from(document.querySelectorAll("button[data-trash]"));
  for(let i = 0; i < buttonSelect.length; i++) {
    buttonSelect[i].addEventListener("click", (e) => {
      let target = e.target.getAttribute("data-trash");
      array[target].importance = false;
      array.splice(target, 1);
      let rem = document.querySelector(`[data-index="${target}"]`)
      rem.remove();
    });
  };
  let inputSelect = Array.from(document.querySelectorAll("input[type=checkbox]"));
  for(let i = 0; i < inputSelect.length; i++) {
    inputSelect[i].addEventListener("click", (e) => {
      let target = e.target.getAttribute("data-input");
      let checkTwo = arrayTwo.includes(array[target]);
      let checkThree = arrayThree.includes(array[target]);
      if (!e.target.checked) {
        if (checkTwo) {
          let index = arrayTwo.indexOf(array[target]);
          arrayTwo[index].importance = "false";

        }
        if (checkThree) {
          let index = arrayThree.indexOf(array[target]);
          arrayThree[index].importance = "false";
        }
        array[target].importance = "false";
        let rem = document.querySelector(`[data-index="${target}"]`);
        rem.remove();
      };
    });
  };
  important.classList.add("selected")
  today.classList.remove("selected")
  week.classList.remove("selected")
  all.classList.remove("selected")
  variable = false;  
}