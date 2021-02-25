
////create object 
const task={
    title:'Task 1',
    description:'task 1 description'
}


Object.defineProperty(task,'tostring',{
   value: function () {
        return this.title+' & '+this.description
    },
    writable:false,
    enumerable:false,
    configurable:true
    
})
const urgentTask=Object.create(task)

Object.defineProperty(urgentTask,'tostring',{
    value: function () {
         return this.title+' & '+this.description
     },
     writable:false,
     enumerable:false,
     configurable:true
     
 })

console.log(urgentTask.tostring());