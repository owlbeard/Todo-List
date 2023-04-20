/* eslint-disable no-shadow */
/* eslint-disable no-prototype-builtins */
import { isSameWeek, compareAsc, format, parse } from 'date-fns';
import './styles/style.css';
import './styles/normalize-css.css';
import { taskMaker } from './modules/taskMaker';
import { cardMaker } from './modules/cardMaker';
import { pageMaker } from './modules/pageMaker';
import { importantMaker } from './modules/importantMaker';
import { deleteButton } from './modules/deleteButton';
import { checkboxListener } from './modules/checkboxListener';
import { changeObject, editButton } from './modules/editButton';
import {
    projectListener,
    projectButtonMaker,
    loadProjects,
} from './modules/projectMaker';
import Waygd from './assets/waygd.mp3';

const audio = new Audio();
audio.src = Waygd;
const button = document.querySelector('#add-button');
const cancel = document.querySelector('.cancel');
const projects = document.getElementById('projects');
const closeProjects = document.getElementById('close');
const middle = document.querySelector('.middle');
const form = document.querySelector('.form');
const formTwo = document.querySelector('.editForm');
const projectForm = document.querySelector('.projectForm');
const formDiv = document.getElementById('myForm');
const projectDiv = document.querySelector('.projectName');
const all = document.getElementById('all');
const today = document.getElementById('today');
const week = document.getElementById('week');
const important = document.getElementById('important');

const taskList = [];
const dailies = [];
const weeklies = [];
let projectTasks = [];
let projectList = [];
const selected = false;
function openForm() {
    formDiv.classList.remove('closed');
    formDiv.classList.add('opened');
    middle.classList.add('backdrop-blur');
}

function closeForm() {
    formDiv.classList.remove('opened');
    formDiv.classList.add('closed');
    middle.classList.remove('backdrop-blur');
    form.reset();
}

function openProjectForm() {
    projectDiv.classList.remove('closed');
    projectDiv.classList.add('opened');
}

export function closeProjectForm() {
    projectDiv.classList.add('closed');
    projectDiv.classList.remove('opened');
    projectForm.reset();
}

if (localStorage.hasOwnProperty('taskList')) {
    const dist = Array.from(JSON.parse(localStorage.getItem('taskList')));

    for (let i = 0; i < dist.length; i += 1) {
        taskList.push(dist[i]);
        const today = format(new Date(), 'dd/MM/yyyy');
        const date = format(new Date(dist[i].date), 'dd/MM/yyyy');
        const compare = compareAsc(
            parse(today, 'dd/MM/yyyy', new Date()),
            parse(date, 'dd/MM/yyyy', new Date())
        );
        const compareWeek = isSameWeek(
            parse(today, 'dd/MM/yyyy', new Date()),
            parse(date, 'dd/MM/yyyy', new Date())
        );
        if (compare === 0) {
            dailies.push(dist[i]);
        }
        if (compareWeek === true) weeklies.push(dist[i]);
    }
}
if (localStorage.hasOwnProperty('projectTasks'))
    projectTasks = JSON.parse(localStorage.getItem('projectTasks'));
if (localStorage.hasOwnProperty('projectList'))
    projectList = JSON.parse(localStorage.getItem('projectList'));

window.addEventListener('DOMContentLoaded', () => {
    if (taskList.length > 0)
        pageMaker(taskList, dailies, weeklies, projectTasks, all, selected);
    if (projectList.length > 0) {
        loadProjects(projectList);
        projectListener(projectTasks, projectList);
    }
    closeForm();
});
all.classList.add('selected');

window.addEventListener('submit', () => {
    localStorage.setItem('taskList', JSON.stringify(taskList));
    localStorage.setItem('projectTasks', JSON.stringify(projectTasks));
    localStorage.setItem('projectList', JSON.stringify(projectList));
});

button.addEventListener('click', () => {
    audio.play();
    openForm();
    document.getElementById('title').focus();
});

cancel.addEventListener('click', closeForm);

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const object = taskMaker(taskList, dailies, weeklies, projectTasks);
    cardMaker(object, taskList, projectTasks);
    deleteButton(taskList, dailies, weeklies, projectTasks);
    checkboxListener(taskList, dailies, weeklies, projectTasks);
    editButton(taskList, dailies, weeklies, projectTasks);
    closeForm();
    form.reset();
});

formTwo.addEventListener('submit', (e) => {
    e.preventDefault();
    const target = editButton(taskList, dailies, weeklies, projectTasks);
    const element = document.querySelector('.selected').getAttribute('id');
    changeObject(target, taskList, dailies, weeklies, projectTasks);
    if (
        element !== 'important' &&
        (element === 'all' || element === 'today' || element === 'week')
    )
        pageMaker(taskList, dailies, weeklies, projectTasks, element, selected);
    else if (element === 'important')
        importantMaker(taskList, dailies, weeklies, important, selected);
    else pageMaker(null, null, null, projectTasks, null, null);
});

projects.addEventListener('click', openProjectForm);
closeProjects.addEventListener('click', closeProjectForm);

projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('project').value;
    projectList.push(name);
    projectButtonMaker(name);
    projectListener(projectTasks, projectList);
    closeProjectForm();
});

if (!selected)
    all.onclick = function () {
        pageMaker(taskList, dailies, weeklies, projectTasks, all, selected);
    };
if (!today.classList.contains('selected'))
    today.onclick = function () {
        pageMaker(taskList, dailies, weeklies, projectTasks, today, selected);
    };
if (!week.classList.contains('selected'))
    week.onclick = function () {
        pageMaker(taskList, dailies, weeklies, projectTasks, week, selected);
    };
if (!important.classList.contains('selected'))
    important.onclick = function () {
        importantMaker(
            taskList,
            dailies,
            weeklies,
            projectTasks,
            important,
            selected
        );
    };
