export function cardMaker(object, array, arrayTwo) {
    const container = document.querySelector('.taskContainer');
    const div = document.createElement('div');
    const label = document.createElement('label');
    const input = document.createElement('input');
    const deleteButton = document.createElement('button');
    const editButton = document.createElement('button');
    const titleP = document.createElement('p');
    const descP = document.createElement('p');
    const dateP = document.createElement('p');
    let titleExpand = false;
    let descExpand = false;

    const check = array.includes(object);
    const checkTwo = arrayTwo.includes(object);
    const index = array.indexOf(object);
    const indexTwo = arrayTwo.indexOf(object);

    if (check) {
        div.classList.add('task');
        div.setAttribute('data-index', `${index}`);
        container.append(div);

        const task = document.querySelector(`[data-index="${index}"]`);
        titleP.classList.add('cardText');
        descP.classList.add('cardText');
        dateP.classList.add('cardText');
        titleP.setAttribute('data-title', `${index}`);
        descP.setAttribute('data-desc', `${index}`);
        dateP.setAttribute('data-date', `${index}`);
        const date = new Date(object.date);
        const dd = String(date.getDate()).padStart(2, '0');
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const yyyy = date.getFullYear();

        task.append(titleP);
        task.append(descP);
        task.append(dateP);

        const titleSelect = document.querySelector(`[data-title="${index}"]`);
        const descSelect = document.querySelector(`[data-desc="${index}"]`);
        const dateSelect = document.querySelector(`[data-date="${index}"]`);
        titleSelect.textContent = `${object.title}`;
        descSelect.textContent += `${object.description}`;
        dateSelect.textContent += `Due: ${dd}.${mm}.${yyyy}`;

        titleSelect.addEventListener('click', (e) => {
            if (e.target.offsetWidth < e.target.scrollWidth || !titleExpand) {
                titleSelect.classList.add('expandTitle');
                titleExpand = true;
            } else {
                titleSelect.classList.remove('expandTitle');
                titleExpand = false;
            }
        });

        descSelect.addEventListener('click', (e) => {
            if (e.target.offsetWidth < e.target.scrollWidth || !descExpand) {
                descSelect.classList.add('expandDesc');
                descExpand = true;
            } else {
                descSelect.classList.remove('expandDesc');
                descExpand = false;
            }
        });

        label.classList.add('textBox');
        label.setAttribute('data-label', `${index}`);
        input.setAttribute('id', 'textMark');
        input.setAttribute('type', 'checkbox');
        input.setAttribute('data-input', `${index}`);
        if (object.importance === 'true' || object.importance === true) {
            input.setAttribute('checked', 'checked');
            task.classList.add('importantTask');
        } else {
            input.removeAttribute('checked');
        }
        task.append(label);

        const labelSelect = document.querySelector(`[data-label="${index}"]`);

        labelSelect.textContent = 'Important?';
        labelSelect.append(input);

        deleteButton.classList.add('deleteButton');
        deleteButton.setAttribute('data-trash', `${index}`);
        editButton.classList.add('editButton');
        editButton.setAttribute('data-edit', `${index}`);
        task.append(deleteButton);
        task.append(editButton);
    }
    if (checkTwo) {
        div.classList.add('task');
        div.setAttribute('data-index', `${indexTwo}`);
        container.append(div);

        const task = document.querySelector(`[data-index="${indexTwo}"]`);
        titleP.classList.add('cardText');
        descP.classList.add('cardText');
        dateP.classList.add('cardText');
        titleP.setAttribute('data-title', `${indexTwo}`);
        descP.setAttribute('data-desc', `${indexTwo}`);
        dateP.setAttribute('data-date', `${indexTwo}`);
        const date = new Date(object.date);
        const dd = String(date.getDate()).padStart(2, '0');
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const yyyy = date.getFullYear();

        task.append(titleP);
        task.append(descP);
        task.append(dateP);

        const titleSelect = document.querySelector(
            `[data-title="${indexTwo}"]`
        );
        const descSelect = document.querySelector(`[data-desc="${indexTwo}"]`);
        const dateSelect = document.querySelector(`[data-date="${indexTwo}"]`);
        titleSelect.textContent = `${object.title}`;
        descSelect.textContent += `${object.description}`;
        dateSelect.textContent += `Due: ${dd}.${mm}.${yyyy}`;

        titleSelect.addEventListener('click', (e) => {
            if (e.target.offsetWidth < e.target.scrollWidth && !titleExpand) {
                titleSelect.classList.add('expandTitle');
                titleExpand = true;
            } else {
                titleSelect.classList.remove('expandTitle');
                titleExpand = false;
            }
        });

        descSelect.addEventListener('click', (e) => {
            if (e.target.offsetWidth < e.target.scrollWidth && !descExpand) {
                descSelect.classList.add('expandDesc');
                descExpand = true;
            } else {
                descSelect.classList.remove('expandDesc');
                descExpand = false;
            }
        });

        label.classList.add('textBox');
        label.setAttribute('data-label', `${indexTwo}`);
        input.setAttribute('id', 'textMark');
        input.setAttribute('type', 'checkbox');
        input.setAttribute('data-input', `${indexTwo}`);
        if (object.importance === 'true' || object.importance === true) {
            input.setAttribute('checked', 'checked');
            task.classList.add('importantTask');
        } else {
            input.removeAttribute('checked');
        }
        task.append(label);

        const labelSelect = document.querySelector(
            `[data-label="${indexTwo}"]`
        );

        labelSelect.textContent = 'Important?';
        labelSelect.append(input);

        deleteButton.classList.add('deleteButton');
        deleteButton.setAttribute('data-trash', `${indexTwo}`);
        editButton.classList.add('editButton');
        editButton.setAttribute('data-edit', `${indexTwo}`);
        task.append(deleteButton);
        task.append(editButton);
    }
}
