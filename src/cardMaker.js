export function cardMaker(array) {
  const container = document.querySelector(".taskContainer")
  let div = document.createElement("div");
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
    task.textContent += `${dd}.` + `${mm}.` + `${yyyy}\r\n\r\n`;
    
    label.classList.add("textBox")
    label.setAttribute("data-label", `${index}`);
    input.setAttribute("id", "textMark")
    input.setAttribute("type", "checkbox");
    input.setAttribute("data-input", `${index}`);
    task.append(label);
    /* Again, declaring the variable after appending the label element, to not get "null" as a selector value. */
    let labelSelect = document.querySelector(`[data-label="${index}"]`);
    
    labelSelect.textContent = "Important?";
    console.log(value.importance);
    
    labelSelect.append(input);
    let inputSelect = document.querySelector(`[data-input="${index}"]`);
    if (value.importance === "true") {
      inputSelect.checked = true;
    }else {
      inputSelect.checked = false;
    }

    button.classList.add("deleteButton");
    button.setAttribute("data-trash", `${index}`);
    task.append(button);
  })
  let buttonSelect = Array.from(document.querySelectorAll("button[data-trash]"));
  for(let i = 0; i < buttonSelect.length; i++) {
    buttonSelect[i].addEventListener("click", (e) => {
    let target = e.target.getAttribute("data-trash");
    array.splice(target, 1);
    let rem = document.querySelector(`[data-index="${target}"]`)
    rem.remove();
    });
  }  
}