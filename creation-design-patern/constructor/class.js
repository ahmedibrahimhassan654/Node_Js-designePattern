//'use strict' //use it to convert my node to ecmascript 15 and able to use class(it was in node js old version)


class Task{
  constructor  (name) {
        this.name=name
        this.completed=false
    
    }

    complete (params) {
        console.log('the task '+this.name+' is completed');
        this.completed=true
    }

    save (params) {
        console.log('the task '+this.name+' is saved');
    }
}

var task1=new Task('create demo for constructor')
var task2=new Task('create demo for modules')
var task3=new Task('create demo for singltons')
var task4=new Task('create demo for prototypes')


task1.complete()
task2 .save()