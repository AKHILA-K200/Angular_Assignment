import { Component } from '@angular/core';
import { taskManagement } from '../../shared';
import { CommonModule } from '@angular/common';
import { CreateTaskComponent } from '../create-task/create-task.component';

@Component({
  selector: 'app-task-management',
  standalone: true,
  imports: [CommonModule,CreateTaskComponent],
  templateUrl: './task-management.component.html',
  styleUrl: './task-management.component.scss'
})
export class TaskManagementComponent {
  taskList:taskManagement.taskCreate[]=[]
  createTask:boolean=false
   ngOnInit(){
    if(localStorage.getItem("taskList")){
      this.taskList= JSON.parse(localStorage.getItem("taskList")!) 

    }

    //this.getTaskList();
  }
   closeDialUpBox(event : boolean){
  this.createTask=false
    
   }
   getTaskList(){
    this.taskList= JSON.parse(localStorage.getItem("taskList")!) 

   }
   openCreateTaskForm(){
    
  this.createTask=true
  console.log("open");

   }
}
