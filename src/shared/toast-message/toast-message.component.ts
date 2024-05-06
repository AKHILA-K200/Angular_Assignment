import { Component, input, Input } from '@angular/core';
import { taskManagement } from '../task.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast-message.component.html',
  styleUrl: './toast-message.component.scss'
})
export class ToastMessageComponent {
@Input() toastTitle:taskManagement.TToastTitle=taskManagement.toastTitle.SUCCESS;
@Input() toastMessage=''
displayToast=false
ngOnChanges(){
  this.displayToast=true
}
}
