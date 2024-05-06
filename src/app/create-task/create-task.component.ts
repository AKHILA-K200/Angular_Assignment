import { Component, EventEmitter, Output, output } from '@angular/core';
import { taskManagement, TaskManagementService } from '../../shared';
import { FormBuilder, FormControl, FormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss'
})
export class CreateTaskComponent {
@Output() statusOfDialUpBox=new EventEmitter<boolean>()   
 
constructor(private formBuilder:FormBuilder,private taskManagementService: TaskManagementService){}
taskCreation = this.formBuilder.group({
  id:new FormControl([this.generate(),Validators.required]),
  title: new FormControl('', [Validators.required]),
  description:new FormControl('') ,
  status:new FormControl(true)
});

ngOnInit(){
}
generate(): string {
  let isUnique = false;
  let tempId = '';

  while (!isUnique) {
    tempId = this.generator();
    }

  return tempId;
}


private generator(): string {
  const isString = `${this.S4()}${this.S4()}-${this.S4()}-${this.S4()}-${this.S4()}-${this.S4()}${this.S4()}${this.S4()}`;

  return isString;
}


private S4(): string {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

submit(){
  
  console.log(this.taskCreation.value);
  this.taskManagementService.appendTask(this.taskCreation.value);
  this.statusOfDialUpBox.emit(true);
}
cancel(){
  this.statusOfDialUpBox.emit(true);
}

get taskTitleControl() {
  return this.taskCreation.controls.title;
}
get taskStatusControl(){
  return this.taskCreation.controls.status
}
}
