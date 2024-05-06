import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavigatorComponent } from './navigator/navigator.component';
import { TaskManagementComponent } from './task-management/task-management.component';
import { DialupComponent } from './dialup/dialup.component';
import { TaskManagementService } from '../shared';
import { CreateTaskComponent } from './create-task/create-task.component';
import { ToastMessageComponent } from '../shared/toast-message/toast-message.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,NavigatorComponent,TaskManagementComponent,DialupComponent,ToastMessageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'assignment';
  constructor(private taskManagementService:TaskManagementService){

  }
  ngOnInit(){      
      this.taskManagementService.setTaskList();
  }
 
}
