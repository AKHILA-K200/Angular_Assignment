import { Component } from '@angular/core';
import { taskManagement, TaskManagementService } from '../../../shared';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from '../create-user/create-user.component';
import { DialupComponent } from '../dialup/dialup.component';
import { ToastMessageComponent } from '../../../shared/toast-message/toast-message.component';

@Component({
  selector: 'app-task-management',
  standalone: true,
  imports: [CommonModule,CreateUserComponent,DialupComponent,ToastMessageComponent],
  templateUrl: './task-management.component.html',
  styleUrl: './task-management.component.scss'
})
export class TaskManagementComponent {
  constructor(private taskManagementService:TaskManagementService){}
  taskList:taskManagement.taskCreate[]=[]
  createTask:boolean=false
  displayToast=false
  displayConfirmation=false
  toastTitle:taskManagement.TToastTitle=taskManagement.toastTitle.SUCCESS;
  toastMessage='';
  confirmationMessage=''
  selectedTask:taskManagement.taskCreate={
    id:'',
    title:'',
    description:'',
    status:false
  }
  actionTobePerformed=''

   ngOnInit(){
    if(localStorage.getItem("taskList")){
      this.taskList= JSON.parse(localStorage.getItem("taskList")!) 
    }
  }
   closeDialUpBox(event : boolean){
    if(event){
      this.toastMessage='Task created successfully';
      this.toastTitle='SUCCESS'
    }
    this.createTask=false
    this.getTaskList();
   }
   getTaskList(){
    this.taskList= JSON.parse(localStorage.getItem("taskList")!) 

   }
   openCreateTaskForm(){  
    this.createTask=true
   }
 
   showConfirmation(task:taskManagement.taskCreate,action:string){
    this.selectedTask=task
   let taskStatus=task.status? ' Un complete ':'Complete';
    if(action==='delete')
      {this.confirmationMessage=`are you sure, that you want to ${action} the task ${task.title}?`}
    else{
      this.confirmationMessage=`are you sure, that you want to mark  ${taskStatus} the task ${task.title}?`

    }
     

    this.displayConfirmation=true;  
    this.actionTobePerformed=action
   }
   confirmDelete(event:boolean){    
   if(event){    
    switch(this.actionTobePerformed){
      case 'delete': this.taskManagementService.deletTask(this.selectedTask.id);
                    this.displayToast=true;
                    this.toastMessage='Deletion Successful';
                    this.toastTitle='ERROR'
                    break;
      case 'update': this.taskManagementService.updatetaskStatus(this.selectedTask.id);
                    this.displayToast=true
                    this.toastMessage='Update Successful';
                    this.toastTitle='SUCCESS'
                    break;
    }
   
   }
   this.getTaskList()

   this.displayConfirmation=false;

   setTimeout(() => {
   this.displayToast=false
   }, 2000);

   }
   
}
