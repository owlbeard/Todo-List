/* eslint-disable no-loop-func */
import { isSameWeek, compareAsc, format, parse } from 'date-fns';

const container = document.querySelector('.taskContainer');
const form = document.querySelector('.editForm');
const formDiv = document.getElementById('editForm');
const cancel = document.querySelector('.editCancel');

function openForm() {
    formDiv.classList.remove('closed');
    formDiv.classList.add('opened');
    container.classList.add('backdrop-blur');
}

function closeForm() {
    formDiv.classList.remove('opened');
    formDiv.classList.add('closed');
    container.classList.remove('backdrop-blur');
    form.reset();
}

cancel.addEventListener('click', closeForm);

export function changeObject(target, array, arrayTwo, arrayThree, arrayFour) {
    const title = document.getElementById('titleEdit').value;
    const description = document.getElementById('descriptionEdit').value;
    const date = document.getElementById('dateEdit').value;
    const importance = document.getElementById('importanceEdit').checked;
    const today = format(new Date(), 'dd/MM/yyyy');
    const objDate = new Date(date);
    const checkTwo = arrayTwo.includes(array[target]);
    const checkThree = arrayThree.includes(array[target]);
    const indexTwo = arrayTwo.indexOf(array[target]);
    const indexThree = arrayThree.indexOf(array[target]);
    const selected = document.querySelector('.selected').textContent;
    if (
        selected === 'All' ||
        selected === 'Today' ||
        selected === 'This Week' ||
        selected === 'Important'
    ) {
        array[target].title = title;
        array[target].description = description;
        array[target].date = objDate;
        array[target].importance = importance;
        localStorage.setItem('taskList', JSON.stringify(array));
        const dateNew = format(objDate, 'dd/MM/yyyy');
        const compare = compareAsc(
            parse(today, 'dd/MM/yyyy', new Date()),
            parse(dateNew, 'dd/MM/yyyy', new Date())
        );
        const compareWeek = isSameWeek(
            parse(today, 'dd/MM/yyyy', new Date()),
            parse(dateNew, 'dd/MM/yyyy', new Date())
        );

        if (compare === 0) {
            if (checkTwo) {
                arrayTwo[indexTwo] = array[target];
            }
            if (!checkTwo) {
                arrayTwo.push(array[target]);
            }
            if (checkThree) {
                arrayThree[indexThree] = array[target];
            }
            if (!checkThree) {
                arrayThree.push(array[target]);
            }
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
        }

        if (compare !== 0 && compareWeek === false) {
            if (checkTwo) {
                arrayTwo.splice(indexTwo, 1);
            }
            if (checkThree) {
                arrayThree.splice(indexTwo, 1);
            }
        }
    } else {
        arrayFour[target].title = title;
        arrayFour[target].description = description;
        arrayFour[target].date = objDate;
        arrayFour[target].importance = importance;
        localStorage.setItem('projectTasks', JSON.stringify(arrayFour));
    }
    closeForm();
}

let tar = null;

export function editButton(array, arrayTwo, arrayThree, arrayFour) {
    const selectedID = document.querySelector('.selected').getAttribute('id');
    const buttonSelect = Array.from(
        document.querySelectorAll('button[data-edit]')
    );
    for (let i = 0; i < buttonSelect.length; i += 1) {
        buttonSelect[i].addEventListener('click', (e) => {
            tar = e.target.getAttribute('data-edit');
            const title = document.getElementById('titleEdit');
            const description = document.getElementById('descriptionEdit');
            const date = document.getElementById('dateEdit');
            const importance = document.getElementById('importanceEdit');
            if (selectedID === 'all' || selectedID === 'important') {
                title.value = array[tar].title;
                description.value = array[tar].description;
                date.value = format(new Date(array[tar].date), 'yyyy-MM-dd');
                if (array[tar].importance === 'true') {
                    importance.checked = true;
                } else importance.checked = false;
            } else if (selectedID === 'today') {
                title.value = arrayTwo[tar].title;
                description.value = arrayTwo[tar].description;
                date.value = format(new Date(arrayTwo[tar].date), 'yyyy-MM-dd');
                if (arrayTwo[tar].importance === 'true') {
                    importance.checked = true;
                } else importance.checked = false;
            } else if (selectedID === 'week') {
                title.value = arrayThree[tar].title;
                description.value = arrayThree[tar].description;
                date.value = format(
                    new Date(arrayThree[tar].date),
                    'yyyy-MM-dd'
                );
                if (arrayThree[tar].importance === 'true') {
                    importance.checked = true;
                } else importance.checked = false;
            } else {
                title.value = arrayFour[tar].title;
                description.value = arrayFour[tar].description;
                date.value = format(
                    new Date(arrayFour[tar].date),
                    'yyyy-MM-dd'
                );
                if (arrayFour[tar].importance === 'true') {
                    importance.checked = true;
                } else importance.checked = false;
            }
            openForm();
            title.focus();
        });
    }
    return tar;
}
