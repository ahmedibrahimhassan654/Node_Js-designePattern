var Task=function (name) {
    this.name=name
    this.completed=false


    this.complete=function () {
        console.log('the task '+this.name+' is completed');
        this.completed=true
       
    }
    this.save=function (params) {
        console.log('the task '+this.name+' is saved');
    }
}

var task1=new Task('create demo for constructor')
var task2=new Task('create demo for modules')
var task3=new Task('create demo for singltons')
var task4=new Task('create demo for prototypes')


task1.complete()
task2.save()