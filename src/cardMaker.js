export function cardMaker(array, arrayTwo, arrayThree) {
  let div = document.createElement("div");
  const container = document.querySelector(".taskContainer")
  array.forEach((value, index) => {
    let label = document.createElement("label");
    let input = document.createElement("input");
    let button = document.createElement("button");
    div.classList.add("task");
    div.setAttribute("data-index", `${index}`);
    container.append(div);
    let task = document.querySelector(`[data-index="${index}"]`);
    task.textContent = `${value.title}\r\n\r\n`;
    task.textContent += `${value.description}\r\n\r\n`;
    let date = new Date(value.date)
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0');
    let yyyy = date.getFullYear();
    task.textContent += `Due: ${dd}.` + `${mm}.` + `${yyyy}\r\n\r\n`;
    
    label.classList.add("textBox")
    label.setAttribute("data-label", `${index}`);
    input.setAttribute("id", "textMark")
    input.setAttribute("type", "checkbox");
    input.setAttribute("data-input", `${index}`);
    if (array[index].importance === "true") {
      input.setAttribute("checked", "checked")
    }else {
      input.removeAttribute("checked");
    }
    task.append(label);
    /* Again, declaring the variable after appending the label element, to not get "null" as a selector value. */
    let labelSelect = document.querySelector(`[data-label="${index}"]`);
    
    labelSelect.textContent = "Important?";
    labelSelect.append(input);
  
    button.classList.add("deleteButton");
    button.setAttribute("data-trash", `${index}`);
    task.append(button);
  })
  let buttonSelect = Array.from(document.querySelectorAll("button[data-trash]"));
  for(let i = 0; i < buttonSelect.length; i++) {
    buttonSelect[i].addEventListener("click", (e) => {
      let target = e.target.getAttribute("data-trash");
      let checkTwo = arrayTwo.includes(array[target]);
      let checkThree = arrayThree.includes(array[target]);
      if (checkTwo) {
        let index = arrayTwo.indexOf(array[target]);
        arrayTwo.splice(index, 1);
      }
      if (checkThree) {
        let index = arrayThree.indexOf(array[target]);
        arrayThree.splice(index, 1);
      }
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
      }else {
        if (checkTwo) {
          let index = arrayTwo.indexOf(array[target]);
          arrayTwo[index].importance = "true";
        }
        if (checkThree) {
          let index = arrayThree.indexOf(array[target]);
          arrayThree[index].importance = "true";
        }
        array[target].importance = "true";
      }
    });
  };    
}