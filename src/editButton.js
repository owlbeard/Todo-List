import { isSameWeek } from 'date-fns';
import { compareAsc } from 'date-fns';
import { format } from 'date-fns';
import { parse } from 'date-fns';

const container = document.querySelector(".taskContainer");
const form = document.querySelector(".editForm");
const formDiv = document.getElementById("editForm");
const cancel = document.querySelector(".editCancel");

function openForm() {
  formDiv.classList.remove("closed");
  formDiv.classList.add("opened");
  container.classList.add("backdrop-blur");
};

function closeForm() {
  formDiv.classList.remove("opened");
  formDiv.classList.add("closed");
  container.classList.remove("backdrop-blur");
  form.reset();
};

cancel.addEventListener("click", closeForm);

export function changeObject(target, array, arrayTwo, arrayThree, arrayFour) {
  let title = document.getElementById("titleEdit").value;
  let description = document.getElementById("descriptionEdit").value;
  let date = document.getElementById("dateEdit").value;
  let importance = document.getElementById("importanceEdit").checked;
  let today = format(new Date(), 'dd/MM/yyyy');
  let objDate = new Date(date);
  let checkTwo = arrayTwo.includes(array[target]);
  let checkThree = arrayThree.includes(array[target]);
  let indexTwo = arrayTwo.indexOf(array[target]);
  let indexThree = arrayThree.indexOf(array[target]);
  let selected = document.querySelector(".selected").textContent
  if (selected === "All" || selected === "Today" || selected === "This Week" || selected === "Important") {
    array[target].title = title;
    array[target].description = description;
    array[target].date = objDate;
    array[target].importance = importance;

    let dateNew = format(objDate, 'dd/MM/yyyy');
    let compare = compareAsc(parse(today, 'dd/MM/yyyy', new Date()), parse(dateNew, 'dd/MM/yyyy', new Date()));
    let compareWeek = isSameWeek(parse(today, 'dd/MM/yyyy', new Date()), parse(dateNew, 'dd/MM/yyyy', new Date()));
    
    if (compare === 0) {
      if (checkTwo) {
        arrayTwo[indexTwo] = array[target];
      };
      if (!checkTwo) {
        arrayTwo.push(array[target]);
      };
      if (checkThree) {
        arrayThree[indexThree] = array[target];
      };
      if (!checkThree) {
        arrayThree.push(array[target]);
      };
    }

    if (compare !== 0 && compareWeek === true) {
      if (checkTwo) {
        arrayTwo.splice(indexTwo, 1);
      }
      if (checkThree) {
        arrayThree[indexThree] = array[target];
      }
      if (!checkThree) {
        arrayThree.push(array[target]);
      }
    };

    if (compare !== 0 && compareWeek === false) {
      if (checkTwo) {
        arrayTwo.splice(indexTwo, 1);
      };
      if (checkThree) {
        arrayThree.splice(indexTwo, 1);
      };
    };
  }else {
    arrayFour[target].title = title;
    arrayFour[target].description = description;
    arrayFour[target].date = objDate;
    arrayFour[target].importance = importance;
  }
  
  closeForm();
}

let target = null;

export function editButton(array, arrayTwo, arrayThree, arrayFour) {
  let selectedID = document.querySelector(".selected").getAttribute("id");
  let buttonSelect = Array.from(document.querySelectorAll("button[data-edit]"));
  for (let i = 0; i < buttonSelect.length; i++) {
    buttonSelect[i].addEventListener("click", (e) => {
      target = e.target.getAttribute("data-edit");
      let title = document.getElementById("titleEdit");
      let description = document.getElementById("descriptionEdit");
      let date = document.getElementById("dateEdit");
      let importance = document.getElementById("importanceEdit");
      if (selectedID === "all" || selectedID === "important") {
        title.value = array[target].title;
        description.value = array[target].description;
        date.value = format (new Date(array[target].date), "yyyy-MM-dd");
        if (array[target].importance === "true") {
          importance.checked = true;
        }else importance.checked = false;
      }else if (selectedID === "today") {
        title.value = arrayTwo[target].title;
        description.value = arrayTwo[target].description;
        date.value = format (new Date(arrayTwo[target].date), "yyyy-MM-dd");
        if (arrayTwo[target].importance === "true") {
          importance.checked = true;
        }else importance.checked = false;
      }else if (selectedID === "week") {
        title.value = arrayThree[target].title;
        description.value = arrayThree[target].description;
        date.value = format (new Date(arrayThree[target].date), "yyyy-MM-dd");
        if (arrayThree[target].importance === "true") {
          importance.checked = true;
        }else importance.checked = false;
      }else {
        title.value = arrayFour[target].title;
        description.value = arrayFour[target].description;
        date.value = format (new Date(arrayFour[target].date), "yyyy-MM-dd");
        if (arrayFour[target].importance === "true") {
          importance.checked = true;
        }else importance.checked = false;
      };
      openForm();
      title.focus();
    })
  }
  return target;
}