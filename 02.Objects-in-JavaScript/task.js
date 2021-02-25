
////create object 
const task={
    title:'Task 1',
    description:'task 1 description'
}

////create object with dot notaion 
//const task=Object.create(Object.prototype)

////create object with new
//const task=new Object()
// task.title='Task 1'
// task.description='task 1 description'
task.tostring=function () {
    return this.title+' & '+this.description
}


console.log(task.tostring());