import { Injectable } from '@angular/core';
import { taskManagement } from './task.type';
@Injectable({
  providedIn: 'root'
})
export class TaskManagementService {

  taskList:taskManagement.taskCreate[]=[
    {
    id:"123",
    title:"Data Validation",
    description:"Validate Input fields",
    status:true,
  },
  {
    id:"1234",
    title:"Authentication",
    description:"Autheticate user credentials",
    status:false,
  },
  {
    id:"12345",
    title:"Unit Testing",
    description:"Do unit testing to reduc errors",
    status:true,
  },
 
]
  constructor() { }

  setTaskList(){
    console.log("hello");
    console.log(this.taskList);
    
    localStorage.setItem("taskList", JSON.stringify(this.taskList) )
  }
  appendTask(task:any){
   this.taskList.push(task);
   this.setTaskList();
  
  }
}
