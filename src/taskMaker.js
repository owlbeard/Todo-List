import { isSameWeek, compareAsc, format, parse } from 'date-fns';

export function taskMaker(taskList, dailies, weeklies, projectTasks) {
  let today = format(new Date(), 'dd/MM/yyyy');
  class Tasks {
    constructor(title, description, date, importance) {
      this.title = title;
      this.description = description;
      this.date = date;
      this.importance = importance;
    };
  
    distribute = () => { 
      taskList.push(this);
      let date = format(new Date(this.date), 'dd/MM/yyyy');
      let compare = compareAsc(parse(today, 'dd/MM/yyyy', new Date()), parse(date, 'dd/MM/yyyy', new Date()));
      let compareWeek = isSameWeek(parse(today, 'dd/MM/yyyy', new Date()), parse(date, 'dd/MM/yyyy', new Date()));
      if (compare === 0) dailies.push(this);
      if (compareWeek === true) weeklies.push(this);
    };
  
  };

  class Project {
    constructor(title, description, date, importance, projectName) {
      this.title = title;
      this.description = description;
      this.date = date;
      this.importance = importance;
      this.projectName = projectName;
    }
  }

  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  let date = document.getElementById("date");
  let importance = document.getElementById("importance").checked;
  let objDate = new Date(date.value);
  let selected = document.querySelector(".selected").textContent
  if (selected === "All" || selected === "Today" || selected === "This Week" || selected === "Important") {
    let newTask = new Tasks(`${title}`, `${description}`, `${objDate}`, `${importance}`);
    newTask.distribute();
  }else {
    let newProjectTask = new Project(`${title}`, `${description}`, `${objDate}`, `${importance}`, `${selected}`)
    projectTasks.push(newProjectTask);
  }
}