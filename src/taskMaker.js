import { isSameWeek } from 'date-fns';
import { compareAsc } from 'date-fns';
import { format } from 'date-fns';
import { parse } from 'date-fns';

export function taskMaker(taskList, dailies, weeklies) {
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

  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  let date = document.getElementById("date");
  let importance = document.getElementById("importance").checked;
  let objDate = new Date(date.value);
  let newTask = new Tasks(`${title}`, `${description}`, `${objDate}`, `${importance}`);
  
  newTask.distribute();
}