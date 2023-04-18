export function cardMaker(object, array, arrayTwo) {
  const container = document.querySelector(".taskContainer");
  let div = document.createElement("div");
  let label = document.createElement("label");
  let input = document.createElement("input");
  let deleteButton = document.createElement("button");
  let editButton = document.createElement("button");
  let titleP = document.createElement("p");
  let descP = document.createElement("p");
  let dateP = document.createElement("p");
  let titleExpand = false;
  let descExpand = false;

  let check = array.includes(object);
  let checkTwo = arrayTwo.includes(object);
  let index = array.indexOf(object);
  let indexTwo = arrayTwo.indexOf(object);

  if (check) {
    div.classList.add("task");
    div.setAttribute("data-index", `${index}`);
    container.append(div);
    
    let task = document.querySelector(`[data-index="${index}"]`);
    titleP.classList.add("cardText");
    descP.classList.add("cardText");
    dateP.classList.add("cardText");
    titleP.setAttribute("data-title", `${index}`);
    descP.setAttribute("data-desc", `${index}`);
    dateP.setAttribute("data-date", `${index}`);
    let date = new Date(object.date);
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0');
    let yyyy = date.getFullYear();
    
    task.append(titleP);
    task.append(descP);
    task.append(dateP);

    let titleSelect = document.querySelector(`[data-title="${index}"]`)
    let descSelect = document.querySelector(`[data-desc="${index}"]`)
    let dateSelect = document.querySelector(`[data-date="${index}"]`)
    titleSelect.textContent = `${object.title}`;
    descSelect.textContent += `${object.description}`;
    dateSelect.textContent += `Due: ${dd}.` + `${mm}.` + `${yyyy}`;

    titleSelect.addEventListener("click", (e) => {
      if (e.target.offsetWidth < e.target.scrollWidth || !titleExpand) {
        titleSelect.classList.add("expandTitle")
        titleExpand = true
      }else {
        titleSelect.classList.remove("expandTitle")
        titleExpand = false
      }  
    })

    descSelect.addEventListener("click", (e) => {
      if (e.target.offsetWidth < e.target.scrollWidth || !descExpand) {
        descSelect.classList.add("expandDesc")
        descExpand = true
      }else {
        descSelect.classList.remove("expandDesc")
        descExpand = false
      } 
    })

    label.classList.add("textBox");
    label.setAttribute("data-label", `${index}`);
    input.setAttribute("id", "textMark");
    input.setAttribute("type", "checkbox");
    input.setAttribute("data-input", `${index}`);
    if (object.importance === "true" || object.importance === true) {
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
  };
  if (checkTwo) {
    div.classList.add("task");
    div.setAttribute("data-index", `${indexTwo}`);
    container.append(div);
    
    let task = document.querySelector(`[data-index="${indexTwo}"]`);
    titleP.classList.add("cardText");
    descP.classList.add("cardText");
    dateP.classList.add("cardText");
    titleP.setAttribute("data-title", `${indexTwo}`);
    descP.setAttribute("data-desc", `${indexTwo}`);
    dateP.setAttribute("data-date", `${indexTwo}`);
    let date = new Date(object.date);
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0');
    let yyyy = date.getFullYear();
    
    task.append(titleP);
    task.append(descP);
    task.append(dateP);

    let titleSelect = document.querySelector(`[data-title="${indexTwo}"]`)
    let descSelect = document.querySelector(`[data-desc="${indexTwo}"]`)
    let dateSelect = document.querySelector(`[data-date="${indexTwo}"]`)
    titleSelect.textContent = `${object.title}`;
    descSelect.textContent += `${object.description}`;
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
    label.setAttribute("data-label", `${indexTwo}`);
    input.setAttribute("id", "textMark");
    input.setAttribute("type", "checkbox");
    input.setAttribute("data-input", `${indexTwo}`);
    if (object.importance === "true" || object.importance === true) {
      input.setAttribute("checked", "checked");
    }else {
      input.removeAttribute("checked");
    };
    task.append(label);
    
    let labelSelect = document.querySelector(`[data-label="${indexTwo}"]`);
    
    labelSelect.textContent = "Important?";
    labelSelect.append(input);
    
    deleteButton.classList.add("deleteButton");
    deleteButton.setAttribute("data-trash", `${indexTwo}`);
    editButton.classList.add("editButton");
    editButton.setAttribute("data-edit", `${indexTwo}`);
    task.append(deleteButton);
    task.append(editButton);
  }  
}  