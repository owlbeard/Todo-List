/* eslint-disable no-shadow */
/* eslint-disable max-classes-per-file */
import { isSameWeek, compareAsc, format, parse } from 'date-fns';

export function taskMaker(taskList, dailies, weeklies, projectTasks) {
    const today = format(new Date(), 'dd/MM/yyyy');
    let newTask = null;
    class Tasks {
        constructor(title, description, date, importance) {
            this.title = title;
            this.description = description;
            this.date = date;
            this.importance = importance;
        }

        distribute = () => {
            taskList.push(this);
            const date = format(new Date(this.date), 'dd/MM/yyyy');
            const compare = compareAsc(
                parse(today, 'dd/MM/yyyy', new Date()),
                parse(date, 'dd/MM/yyyy', new Date())
            );
            const compareWeek = isSameWeek(
                parse(today, 'dd/MM/yyyy', new Date()),
                parse(date, 'dd/MM/yyyy', new Date())
            );
            if (compare === 0) dailies.push(this);
            if (compareWeek === true) weeklies.push(this);
        };
    }

    class Project {
        constructor(title, description, date, importance, projectName) {
            this.title = title;
            this.description = description;
            this.date = date;
            this.importance = importance;
            this.projectName = projectName;
        }
    }

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const date = document.getElementById('date');
    const importance = document.getElementById('importance').checked;
    const objDate = new Date(date.value);
    const selected = document.querySelector('.selected').textContent;
    if (
        selected === 'All' ||
        selected === 'Today' ||
        selected === 'This Week' ||
        selected === 'Important'
    ) {
        newTask = new Tasks(
            `${title}`,
            `${description}`,
            `${objDate}`,
            `${importance}`
        );
        newTask.distribute();
    } else {
        newTask = new Project(
            `${title}`,
            `${description}`,
            `${objDate}`,
            `${importance}`,
            `${selected}`
        );
        projectTasks.push(newTask);
    }
    return newTask;
}
