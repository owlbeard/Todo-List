export function deleteButton(array, arrayTwo, arrayThree, arrayFour) {
    const buttonSelect = Array.from(
        document.querySelectorAll('button[data-trash]')
    );
    for (let i = 0; i < buttonSelect.length; i += 1) {
        buttonSelect[i].addEventListener('click', (e) => {
            const selected = document.querySelector('.selected');
            const idName = selected.getAttribute('id');
            const target = e.target.getAttribute('data-trash');

            if (
                idName === 'all' ||
                idName === 'today' ||
                idName === 'week' ||
                idName === 'important'
            ) {
                const checkTwo = arrayTwo.includes(array[target]);
                const checkThree = arrayThree.includes(array[target]);
                const indexTwo = arrayTwo.indexOf(array[target]);
                const indexThree = arrayThree.indexOf(array[target]);
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

                const rem = document.querySelector(`[data-index="${target}"]`);
                rem.remove();
                localStorage.setItem('taskList', JSON.stringify(array));
            } else {
                arrayFour.splice(target, 1);
                const rem = document.querySelector(`[data-index="${target}"]`);
                rem.remove();
                localStorage.setItem('projectTasks', JSON.stringify(arrayFour));
            }
        });
    }
}
