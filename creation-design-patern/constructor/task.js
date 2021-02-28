var Task=function (name) {
    this.name=name
    this.completed=false



}

Task.prototype.complete=function (params) {
    console.log('the task '+this.name+' is completed');
    this.completed=true
}
Task.prototype.save=function (params) {
    console.log('the task '+this.name+' is saved');
}

module.exports =Task