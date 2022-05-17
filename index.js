const PRIORITY = { "LOW": 1, "MEDIUM": 3, "HIGH": 5, "URGENT": 7 };



function validinteger(value) {
  return Boolean(/^[0-9]+$/.test(value));
};



function validatepriority(priority) {
  if((priority != PRIORITY.LOW) && (priority != PRIORITY.MEDIUM) && 
     (priority != PRIORITY.HIGH) && (priority != PRIORITY.URGENT)) {
    return PRIORITY.LOW;
  } else {
    return parseInt(priority);
  };
};



function todaysdate() {
  let nowDate = new Date();
  // returns a date value as 'dd/mm/yyyy hh:mm:ss'
  return (nowDate.getDate() + '/' + (nowDate.getMonth() + 1) + '/' + nowDate.getFullYear()
         + ' ' + nowDate.getHours() + ':' + nowDate.getMinutes() + ':' + nowDate.getSeconds());
}



class Task {
  
  constructor(title, priority) {
    this._title = title;
    this._priority = validatepriority(priority);
    this._added = todaysdate();
  }
  
  get title() {
    return this._title;
  }  

  get priority() {
    return this._priority;
  }
  
  set priority(priority) {
    this._priority = validatepriority(priority);
  } 

  get added() {
    return this._added;
  }
  
}



class ToDo {
  
  constructor() {
    this.tasks = [];
  };
  

  add(task) {
    this.tasks.push(task);
    return this.tasks.length;
  };
  

  remove(task) {
    if(this.tasks.includes(task)) {
      let index = this.tasks.indexOf(task);
      this.tasks.splice(index, 1);
      return true;
    };
    return false;
  };
  

  remove(_title) {
      for(let i=0; i < this.tasks.length; i++) {
          if(this.tasks[i].title === _title) {
            this.tasks.splice(i, 1);
            return true;
          };
        };
      return false;
  };


  list(priority) {
    let priorityfilteredarray = [];
    switch(priority) {
      case 0:
        return this.tasks;
      case 1: 
        priorityfilteredarray = this.tasks.filter(task => task._priority == priority); break;
      case 3: 
        priorityfilteredarray = this.tasks.filter(task => task._priority == priority); break;
      case 5: 
        priorityfilteredarray = this.tasks.filter(task => task._priority == priority); break;
      case 7: 
        priorityfilteredarray = this.tasks.filter(task => task._priority == priority); break;
    }
    return priorityfilteredarray;
  };

  
  task(title) {
    for(let tasks = 0; tasks < this.tasks.length; tasks++) {
      if(this.tasks[tasks].title == title) {
        return this.tasks[tasks];
      }
    };
    throw new Error ('Task \'' + title + '\' Not Found');
  };

};



module.exports = {
  PRIORITY,
  validinteger,
  validatepriority,
  todaysdate,
  Task,
  ToDo,
}