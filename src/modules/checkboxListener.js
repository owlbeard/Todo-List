export function checkboxListener(array, arrayTwo, arrayThree, arrayFour) {
  let inputSelect = Array.from(document.querySelectorAll("[data-input]"));
  let selected = document.querySelector(".selected").getAttribute("id")
  if (selected === "all" || selected === "today" || selected === "week") {
    for(let i = 0; i < inputSelect.length; i++) {
      inputSelect[i].addEventListener("click", (e) => {
        let target = e.target.getAttribute("data-input");
        let task = document.querySelector(`[data-index="${target}"]`)
        let indexTwo = arrayTwo.indexOf(array[target]);
        let indexThree = arrayThree.indexOf(array[target]);
        let checkTwo = arrayTwo.includes(array[target]);
        let checkThree = arrayThree.includes(array[target]);
        if (!e.target.checked) {
          if (checkTwo) {
            arrayTwo[indexTwo].importance = "false";
          }
          if (checkThree) {
            arrayThree[indexThree].importance = "false";
          }
          array[target].importance = "false";
          console.log(task);
          task.classList.remove("importantTask");
        }else {
          if (checkTwo) {
            arrayTwo[indexTwo].importance = "true";
          }
          if (checkThree) {
            arrayThree[indexThree].importance = "true";
          }
          array[target].importance = "true";
          task.classList.add("importantTask");
        }
        localStorage.setItem('taskList', JSON.stringify(array))  
      });
    };
  }else if (selected === "important") {
    for(let i = 0; i < inputSelect.length; i++) {
      inputSelect[i].addEventListener("click", (e) => {
        let target = e.target.getAttribute("data-input");
        let task = document.querySelector(`[data-index="${target}"]`)
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
          task.classList.add("importantTask");
        };
        localStorage.setItem('taskList', JSON.stringify(array));  
      });
    };
  }else {
    for(let i = 0; i < inputSelect.length; i++) {
      inputSelect[i].addEventListener("click", (e) => {
        let target = e.target.getAttribute("data-input");
        let task = document.querySelector(`[data-index="${target}"]`)
        if (!e.target.checked) {
          arrayFour[target].importance = "false";
          task.classList.remove("importantTask");
        }else {
          arrayFour[target].importance = "true"
          task.classList.add("importantTask");
        }  
        localStorage.setItem('projectTasks', JSON.stringify(arrayFour)) 
      })
    }    
  }
   
}