/* eslint-disable no-loop-func */
import { checkboxListener } from './checkboxListener';
import { deleteButton } from './deleteButton';
import { editButton } from './editButton';
import { selector } from './selector';

export function pageMaker(
    array,
    arrayTwo,
    arrayThree,
    arrayFour,
    element,
    variable
) {
    if (element !== null && variable !== null) selector(element, variable);
    const selected = document.querySelector('.selected');
    const idName = selected.getAttribute('id');
    let iterate = null;
    if (idName === 'all') iterate = array;
    else if (idName === 'today') iterate = arrayTwo;
    else if (idName === 'week') iterate = arrayThree;
    else iterate = null;
    let titleExpand = false;
    let descExpand = false;

    const container = document.querySelector('.taskContainer');
    const children = Array.from(container.childNodes);
    for (let i = 0; i < children.length; i += 1) {
        container.removeChild(container.lastChild);
    }
    if (idName === 'all' || idName === 'today' || idName === 'week') {
        for (let i = 0; i < iterate.length; i += 1) {
            const div = document.createElement('div');
            const label = document.createElement('label');
            const input = document.createElement('input');
            const delButton = document.createElement('button');
            const edButton = document.createElement('button');
            const titleP = document.createElement('p');
            const descP = document.createElement('p');
            const dateP = document.createElement('p');

            div.classList.add('task');
            div.setAttribute('data-index', `${i}`);
            container.append(div);

            const task = document.querySelector(`[data-index="${i}"]`);
            titleP.classList.add('cardText');
            descP.classList.add('cardText');
            dateP.classList.add('cardText');
            titleP.setAttribute('data-title', `${i}`);
            descP.setAttribute('data-desc', `${i}`);
            dateP.setAttribute('data-date', `${i}`);
            const date = new Date(iterate[i].date);
            const dd = String(date.getDate()).padStart(2, '0');
            const mm = String(date.getMonth() + 1).padStart(2, '0');
            const yyyy = date.getFullYear();

            task.append(titleP);
            task.append(descP);
            task.append(dateP);

            const titleSelect = document.querySelector(`[data-title="${i}"]`);
            const descSelect = document.querySelector(`[data-desc="${i}"]`);
            const dateSelect = document.querySelector(`[data-date="${i}"]`);
            titleSelect.textContent = `${iterate[i].title}`;
            descSelect.textContent += `${iterate[i].description}`;
            dateSelect.textContent += `Due: ${dd}.${mm}.${yyyy}`;

            titleSelect.addEventListener('click', (e) => {
                if (
                    e.target.offsetWidth < e.target.scrollWidth &&
                    !titleExpand
                ) {
                    titleSelect.classList.add('expandTitle');
                    titleExpand = true;
                } else {
                    titleSelect.classList.remove('expandTitle');
                    titleExpand = false;
                }
            });

            descSelect.addEventListener('click', (e) => {
                if (
                    e.target.offsetWidth < e.target.scrollWidth &&
                    !descExpand
                ) {
                    descSelect.classList.add('expandDesc');
                    descExpand = true;
                } else {
                    descSelect.classList.remove('expandDesc');
                    descExpand = false;
                }
            });

            label.classList.add('textBox');
            label.setAttribute('data-label', `${i}`);
            input.setAttribute('id', 'textMark');
            input.setAttribute('type', 'checkbox');
            input.setAttribute('data-input', `${i}`);
            if (
                iterate[i].importance === 'true' ||
                iterate[i].importance === true
            ) {
                input.setAttribute('checked', 'checked');
                task.classList.add('importantTask');
            } else {
                input.removeAttribute('checked');
            }
            task.append(label);

            const labelSelect = document.querySelector(`[data-label="${i}"]`);

            labelSelect.textContent = 'Important?';
            labelSelect.append(input);

            delButton.classList.add('deleteButton');
            delButton.setAttribute('data-trash', `${i}`);
            edButton.classList.add('editButton');
            edButton.setAttribute('data-edit', `${i}`);
            task.append(delButton);
            task.append(edButton);
        }
    } else {
        for (let i = 0; i < arrayFour.length; i += 1) {
            if (arrayFour[i].projectName === idName) {
                const div = document.createElement('div');
                const label = document.createElement('label');
                const input = document.createElement('input');
                const delButton = document.createElement('button');
                const edButton = document.createElement('button');
                const titleP = document.createElement('p');
                const descP = document.createElement('p');
                const dateP = document.createElement('p');

                div.classList.add('task');
                div.setAttribute('data-index', `${i}`);
                container.append(div);

                const task = document.querySelector(`[data-index="${i}"]`);
                titleP.classList.add('cardText');
                descP.classList.add('cardText');
                dateP.classList.add('cardText');
                titleP.setAttribute('data-title', `${i}`);
                descP.setAttribute('data-desc', `${i}`);
                dateP.setAttribute('data-date', `${i}`);
                const date = new Date(arrayFour[i].date);
                const dd = String(date.getDate()).padStart(2, '0');
                const mm = String(date.getMonth() + 1).padStart(2, '0');
                const yyyy = date.getFullYear();

                task.append(titleP);
                task.append(descP);
                task.append(dateP);

                const titleSelect = document.querySelector(
                    `[data-title="${i}"]`
                );
                const descSelect = document.querySelector(`[data-desc="${i}"]`);
                const dateSelect = document.querySelector(`[data-date="${i}"]`);
                titleSelect.textContent = `${arrayFour[i].title}`;
                descSelect.textContent += `${arrayFour[i].description}`;
                dateSelect.textContent += `Due: ${dd}.${mm}.${yyyy}`;

                titleSelect.addEventListener('click', (e) => {
                    if (
                        e.target.offsetWidth < e.target.scrollWidth &&
                        !titleExpand
                    ) {
                        titleSelect.classList.add('expandTitle');
                        titleExpand = true;
                    } else {
                        titleSelect.classList.remove('expandTitle');
                        titleExpand = false;
                    }
                });

                descSelect.addEventListener('click', (e) => {
                    if (
                        e.target.offsetWidth < e.target.scrollWidth &&
                        !descExpand
                    ) {
                        descSelect.classList.add('expandDesc');
                        descExpand = true;
                    } else {
                        descSelect.classList.remove('expandDesc');
                        descExpand = false;
                    }
                });

                label.classList.add('textBox');
                label.setAttribute('data-label', `${i}`);
                input.setAttribute('id', 'textMark');
                input.setAttribute('type', 'checkbox');
                input.setAttribute('data-input', `${i}`);
                if (
                    arrayFour[i].importance === 'true' ||
                    arrayFour[i].importance === true
                ) {
                    input.setAttribute('checked', 'checked');
                    task.classList.add('importantTask');
                } else {
                    input.removeAttribute('checked');
                }
                task.append(label);

                const labelSelect = document.querySelector(
                    `[data-label="${i}"]`
                );

                labelSelect.textContent = 'Important?';
                labelSelect.append(input);

                delButton.classList.add('deleteButton');
                delButton.setAttribute('data-trash', `${i}`);
                edButton.classList.add('editButton');
                edButton.setAttribute('data-edit', `${i}`);
                task.append(delButton);
                task.append(edButton);
            }
        }
    }
    deleteButton(array, arrayTwo, arrayThree, arrayFour);
    editButton(array, arrayTwo, arrayThree, arrayFour);
    checkboxListener(array, arrayTwo, arrayThree, arrayFour);
}
