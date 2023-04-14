// import { isSameWeek } from 'date-fns'
// import { compareAsc } from 'date-fns'
// import { format } from 'date-fns'
// import { parse } from 'date-fns'
// import { pageMaker } from './pageMaker'
// import { importantMaker } from './importantMaker'
// import { selector } from './selector'

// const container = document.querySelector(".taskContainer");
// const form = document.querySelector(".editForm")
// const formDiv = document.getElementById("editForm")
// const cancel = document.querySelector(".editCancel");

// function openForm() {
//   formDiv.classList.remove("closed");
//   formDiv.classList.add("opened");
//   container.classList.add("backdrop-blur");
// }

// function closeForm() {
//   formDiv.classList.remove("opened");
//   formDiv.classList.add("closed");
//   container.classList.remove("backdrop-blur");
//   form.reset();
// }

// cancel.addEventListener("click", closeForm);

// function changeObject(target, array, arrayTwo, arrayThree) {
//   let title = document.getElementById("titleEdit").value;
//   let description = document.getElementById("descriptionEdit").value;
//   let date = document.getElementById("dateEdit").value;
//   let importance = document.getElementById("importanceEdit").checked;
//   let today = format(new Date(), 'dd/MM/yyyy')
//   console.log(date)
//   let objDate = new Date(date)
//   console.log(objDate)
//   let checkTwo = arrayTwo.includes(array[target]);
//   let checkThree = arrayThree.includes(array[target]);
//   let indexTwo = arrayTwo.indexOf(array[target]);
//   let indexThree = arrayThree.indexOf(array[target]);

//   array[target].title = title;
//   array[target].description = description;
//   array[target].date = objDate;
//   array[target].importance = importance;

//   let dateNew = format(objDate, 'dd/MM/yyyy');
//   let compare = compareAsc(parse(today, 'dd/MM/yyyy', new Date()), parse(dateNew, 'dd/MM/yyyy', new Date()));
//   let compareWeek = isSameWeek(parse(today, 'dd/MM/yyyy', new Date()), parse(dateNew, 'dd/MM/yyyy', new Date()));
  
//   if (compare === 0) {
//     if (checkTwo) {
//       arrayTwo[indexTwo] = array[target];
//     }
//     if (!checkTwo) {
//       arrayTwo.push(array[target]);
//     }
//     if (checkThree) {
//       arrayThree[indexThree] = array[target];
//     }
//     if (!checkThree) {
//       arrayThree.push(array[target]);
//     }
//   }

//   if (compare !== 0 && compareWeek === true) {
//     if (checkTwo) {
//       arrayTwo.splice(indexTwo, 1);
//     }
//     if (checkThree) {
//       arrayThree[indexThree] = array[target];
//     }
//     if (!checkThree) {
//       arrayThree.push(array[target]);
//     }
//   }

//   if (compare !== 0 && compareWeek === false) {
//     if (checkTwo) {
//       arrayTwo.splice(indexTwo, 1);
//     }
//     if (checkThree) {
//       arrayThree.splice(indexTwo, 1);
//     }
//   }
  
//   let task = document.querySelector(`[data-index="${target}"]`)
//   task.textContent = `${array[target].title}\r\n\r\n`;
//   task.textContent += `${array[target].description}\r\n\r\n`;
//   let dateInfo = new Date(array[target].date)
//   let dd = String(dateInfo.getDate()).padStart(2, '0');
//   let mm = String(dateInfo.getMonth() + 1).padStart(2, '0');
//   let yyyy = dateInfo.getFullYear();
//   task.textContent += `Due: ${dd}.` + `${mm}.` + `${yyyy}\r\n\r\n`;
// }

// export function editButton(array, arrayTwo, arrayThree, element, variable) {
//   let buttonSelect = Array.from(document.querySelectorAll("button[data-edit]"));
//   let target = "null";
//   for (let i = 0; i < buttonSelect.length; i++) {
//     buttonSelect[i].addEventListener("click", (e) => {
//       target = e.target.getAttribute("data-edit");
//       openForm();
//     })
//   }
//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     changeObject(target, array, arrayTwo, arrayThree)
//     let idName = selector(element, variable);
//     if (idName !== "important") pageMaker(array, arrayTwo, arrayThree, element, variable);
//     else importantMaker(array, arrayTwo, arrayThree, element, variable);
//     closeForm();
//   }); 
// }