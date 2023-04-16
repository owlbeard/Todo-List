export function checkboxListener(array, arrayTwo, arrayThree, arrayFour) {
  let inputSelect = Array.from(document.querySelectorAll("[data-input]"));
  let selected = document.querySelector(".selected").getAttribute("id")
  if (selected === "all" || selected === "today" || selected === "week") {
    for(let i = 0; i < inputSelect.length; i++) {
      inputSelect[i].addEventListener("click", (e) => {
        let target = e.target.getAttribute("data-input");
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
        }else {
          if (checkTwo) {
            arrayTwo[indexTwo].importance = "true";
          }
          if (checkThree) {
            arrayThree[indexThree].importance = "true";
          }
          array[target].importance = "true";
        }
        localStorage.setItem('taskList', JSON.stringify(array))  
      });
    };
  }else if (selected === "important") {
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
        localStorage.setItem('taskList', JSON.stringify(array));  
      });
    };
  }else {
    for(let i = 0; i < inputSelect.length; i++) {
      inputSelect[i].addEventListener("click", (e) => {
        let target = e.target.getAttribute("data-input");
        if (!e.target.checked) arrayFour[target].importance = "false";
        else arrayFour[target].importance = "true"
        localStorage.setItem('projectTasks', JSON.stringify(arrayFour)) 
      })
    }    
  }
   
}