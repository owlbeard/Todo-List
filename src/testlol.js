deleteButton.classList.add("deleteButton");
deleteButton.setAttribute("data-trash", `${i}`);
task.append(deleteButton);
editButton.classList.add("editButton");
editButton.setAttribute("data-edit", `${i}`);
task.append(editButton);

let editButtonSelect = document.querySelector(`[data-edit="${i}"]`)

editButtonSelect.addEventListener("click", (e) => {
  let target = e.target.getAttribute("data-input");
  let checkTwo = arrayTwo.includes(array[target]);
  let checkThree = arrayThree.includes(array[target]);
  let indexTwo = arrayTwo.indexOf(array[target]);
  let indexThree = arrayThree.indexOf(array[target]);
  document.getElementById("editForm").classList.remove("closed");
  document.getElementById("editForm").classList.add("opened");
  const formTwo = document.querySelector(".editForm");
  const cancel = document.querySelector(".editCancel");
  cancel.addEventListener("click", () => {
    document.getElementById("editForm").classList.remove("opened");
    document.getElementById("editForm").classList.add("closed");
  })
  formTwo.addEventListener("submit", (event) => {
    event.preventDefault();
    let title = document.getElementById("titleEdit").value;
    let description = document.getElementById("descriptionEdit").value;
    let date = document.getElementById("dateEdit");
    let importance = document.getElementById("importanceEdit").checked;
    let objDate = new Date(date.value)
    array[i].title = title;
    array[i].description = description;
    array[i].date = objDate;
    array[i].importance = importance;
    if (checkTwo) {
      arrayTwo[indexTwo].title = title;
      arrayTwo[indexTwo].description = description;
      arrayTwo[indexTwo].date = objDate;
      arrayTwo[indexTwo].importance = importance;
    }
    if (checkThree) {
      arrayThree[indexThree].title = title;
      arrayThree[indexThree].description = description;
      arrayThree[indexThree].date = objDate;
      arrayThree[indexThree].importance = importance;
    }
    task.textContent = `${array[i].title}\r\n\r\n`;
    task.textContent += `${array[i].description}\r\n\r\n`;
    let dateInfo = new Date(array[i].date)
    let dd = String(dateInfo.getDate()).padStart(2, '0');
    let mm = String(dateInfo.getMonth() + 1).padStart(2, '0');
    let yyyy = dateInfo.getFullYear();
    task.textContent += `Due: ${dd}.` + `${mm}.` + `${yyyy}\r\n\r\n`;

    
    if (importance === true) {
      input.setAttribute("checked", "checked")
    }
    else {
      input.removeAttribute("checked")
    }
    task.append(label);
    labelSelect.textContent = "Important?";
    labelSelect.append(input);
    task.append(deleteButton);
    task.append(editButton);
    
    document.getElementById("editForm").classList.remove("opened");
    document.getElementById("editForm").classList.add("closed");
    formTwo.reset();
  })
});