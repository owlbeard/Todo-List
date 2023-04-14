export function deleteButton(array, arrayTwo, arrayThree) {
  let buttonSelect = Array.from(document.querySelectorAll("button[data-trash]"));
  for(let i = 0; i < buttonSelect.length; i++) {
    buttonSelect[i].addEventListener("click", (e) => {
      let target = e.target.getAttribute("data-trash");
      let checkTwo = arrayTwo.includes(array[target]);
      let checkThree = arrayThree.includes(array[target]);
      let indexTwo = arrayTwo.indexOf(array[target]);
      let indexThree = arrayThree.indexOf(array[target]);
      if (checkTwo && !checkThree) {
        arrayTwo.splice(indexTwo, 1);
      }
      if (checkThree && !checkTwo) {
        arrayThree.splice(indexThree, 1);
      }
      if (checkTwo && checkThree) {
        arrayTwo.splice(indexTwo, 1);
        arrayThree.splice(indexThree, 1);
      }
      array.splice(target, 1);
      let rem = document.querySelector(`[data-index="${target}"]`)
      rem.remove();
    });
  }
}    