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
    localStorage.setItem("taskList", JSON.stringify(this.taskList) )
  }
  appendTask(task:taskManagement.taskCreate){
   this.taskList.push(task);
   this.setTaskList();
  
  }
  deletTask(taskId:string){

   this.removeTaskById(taskId)
   this.setTaskList()
  }
 
  removeTaskById(id: string): void {
    const index = this.taskList.findIndex(task => task.id === id);
        if (index !== -1) {
      this.taskList.splice(index, 1);
    }
  }
  updatetaskStatus(taskId:string){
this.taskList.filter((task) =>{
 if(task.id === taskId) 
  task.status=!task.status;   
});
this.setTaskList()
  }
  
}
