export function checkboxListener(array, arrayTwo, arrayThree, arrayFour) {
    const inputSelect = Array.from(document.querySelectorAll('[data-input]'));
    const selected = document.querySelector('.selected').getAttribute('id');
    if (selected === 'all' || selected === 'today' || selected === 'week') {
        for (let i = 0; i < inputSelect.length; i += 1) {
            inputSelect[i].addEventListener('click', (e) => {
                const target = e.target.getAttribute('data-input');
                const task = document.querySelector(`[data-index="${target}"]`);
                const indexTwo = arrayTwo.indexOf(array[target]);
                const indexThree = arrayThree.indexOf(array[target]);
                const checkTwo = arrayTwo.includes(array[target]);
                const checkThree = arrayThree.includes(array[target]);
                if (!e.target.checked) {
                    if (checkTwo) {
                        arrayTwo[indexTwo].importance = 'false';
                    }
                    if (checkThree) {
                        arrayThree[indexThree].importance = 'false';
                    }
                    array[target].importance = 'false';
                    task.classList.remove('importantTask');
                } else {
                    if (checkTwo) {
                        arrayTwo[indexTwo].importance = 'true';
                    }
                    if (checkThree) {
                        arrayThree[indexThree].importance = 'true';
                    }
                    array[target].importance = 'true';
                    task.classList.add('importantTask');
                }
                localStorage.setItem('taskList', JSON.stringify(array));
            });
        }
    } else if (selected === 'important') {
        for (let i = 0; i < inputSelect.length; i += 1) {
            inputSelect[i].addEventListener('click', (e) => {
                const target = e.target.getAttribute('data-input');
                const task = document.querySelector(`[data-index="${target}"]`);
                const checkTwo = arrayTwo.includes(array[target]);
                const checkThree = arrayThree.includes(array[target]);
                if (!e.target.checked) {
                    if (checkTwo) {
                        const index = arrayTwo.indexOf(array[target]);
                        arrayTwo[index].importance = 'false';
                    }
                    if (checkThree) {
                        const index = arrayThree.indexOf(array[target]);
                        arrayThree[index].importance = 'false';
                    }
                    array[target].importance = 'false';
                    const rem = document.querySelector(
                        `[data-index="${target}"]`
                    );
                    rem.remove();
                    task.classList.add('importantTask');
                }
                localStorage.setItem('taskList', JSON.stringify(array));
            });
        }
    } else {
        for (let i = 0; i < inputSelect.length; i += 1) {
            inputSelect[i].addEventListener('click', (e) => {
                const target = e.target.getAttribute('data-input');
                const task = document.querySelector(`[data-index="${target}"]`);
                if (!e.target.checked) {
                    arrayFour[target].importance = 'false';
                    task.classList.remove('importantTask');
                } else {
                    arrayFour[target].importance = 'true';
                    task.classList.add('importantTask');
                }
                localStorage.setItem('projectTasks', JSON.stringify(arrayFour));
            });
        }
    }
}
