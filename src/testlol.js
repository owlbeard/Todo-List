let inputSelect = Array.from(document.querySelectorAll("input[type=checkbox]"));
for(let i = 0; i < inputSelect.length; i++) {
  inputSelect[i].addEventListener("click", (e) => {
    let target = e.target.getAttribute("data-trash");
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