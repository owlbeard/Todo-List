import { pageMaker } from './pageMaker';

const all = document.getElementById('all');
const today = document.getElementById('today');
const week = document.getElementById('week');
const important = document.getElementById('important');
const mainCategories = [all, today, week, important];
let projectNumber = 0;

export function projectButtonMaker(name) {
    const projectButton = document.createElement('button');
    const deleteButton = document.createElement('button');
    projectButton.setAttribute('id', `${name}`);
    projectButton.setAttribute('data-project', `${projectNumber}`);
    projectButton.textContent = `${name}`;
    document.querySelector('.projects').append(projectButton);
    const project = document.querySelector(`[data-project="${projectNumber}"]`);
    deleteButton.classList.add('projDel');
    deleteButton.setAttribute('data-projTrash', `${projectNumber}`);
    project.append(deleteButton);
    projectNumber += 1;
}

function projectMaker(e) {
    const projects = Array.from(document.querySelectorAll('[data-project]'));
    for (let i = 0; i < projects.length; i += 1) {
        projects[i].classList.remove('selected');
    }
    for (let i = 0; i < mainCategories.length; i += 1) {
        mainCategories[i].classList.remove('selected');
    }
    const project = e.target;
    project.classList.add('selected');
}

export function loadProjects(array) {
    for (let i = 0; i < array.length; i += 1) {
        const projectButton = document.createElement('button');
        const deleteButton = document.createElement('button');
        projectButton.setAttribute('id', `${array[i]}`);
        projectButton.setAttribute('data-project', `${i}`);
        projectButton.textContent = `${array[i]}`;
        document.querySelector('.projects').append(projectButton);
        const project = document.querySelector(`[data-project="${i}"]`);
        deleteButton.classList.add('projDel');
        deleteButton.setAttribute('data-projTrash', `${i}`);
        project.append(deleteButton);
    }
}

function deleteProject(e, array, arrayTwo) {
    const selected = document.querySelector('.selected').getAttribute('id');
    const projectIndex = e.target.getAttribute('data-projTrash');
    const project = document.querySelector(`[data-project="${projectIndex}"]`);
    const projectName = project.getAttribute('id');
    project.remove();
    if (selected === projectName) {
        const container = document.querySelector('.taskContainer');
        const children = Array.from(container.childNodes);
        for (let i = 0; i < children.length; i += 1) {
            container.removeChild(container.lastChild);
        }
    }
    for (let i = 0; i < array.length; i += 1) {
        if (array[i].projectName === projectName) {
            const index = array.indexOf(array[i]);
            array.splice(index, 1);
            localStorage.setItem('projectTasks', JSON.stringify(array));
        }
    }
    for (let i = 0; i < arrayTwo.length; i += 1) {
        if (arrayTwo[i] === projectName) {
            const index = arrayTwo.indexOf(array[i]);
            arrayTwo.splice(index, 1);
            localStorage.setItem('projectList', JSON.stringify(arrayTwo));
        }
    }
}

export function projectListener(array, arrayTwo) {
    const projects = Array.from(document.querySelectorAll('[data-project]'));
    for (let i = 0; i < projects.length; i += 1) {
        projects[i].addEventListener('click', (e) => {
            if (!e.target.classList.contains('projDel')) {
                projectMaker(e);
                pageMaker(null, null, null, array, null, null);
            } else {
                deleteProject(e, array, arrayTwo);
            }
        });
    }
}
