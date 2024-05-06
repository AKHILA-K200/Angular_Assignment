import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';
import { CreateTaskComponent } from '../create-task/create-task.component';

@Component({
  selector: 'app-dialup',
  standalone: true,
  imports: [CreateTaskComponent],
  templateUrl: './dialup.component.html',
  styleUrl: './dialup.component.scss'
})
export class DialupComponent {
@Output()  confirmationStatus=new EventEmitter<boolean>();
@Input() confrimationMessage=''
emitConfirmationStatus(status:boolean){
   this.confirmationStatus.emit(status)
}
}
