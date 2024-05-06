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
public ids: string[] = [];

constructor(private formBuilder:FormBuilder,private taskManagementService: TaskManagementService){}
taskCreation = this.formBuilder.group<taskManagement.taskCreateForm>({
  id:new FormControl(this.generate(),[Validators.required]),
  title: new FormControl('', [Validators.required]),
  description:new FormControl('') ,
  status:new FormControl(true)
});

ngOnInit(){  }
generate(): string {
  let isUnique = false;
  let tempId = '';

  while (!isUnique) {
    tempId = this.generator();
    if (!this.idExists(tempId)) {
      isUnique = true;
      this.ids.push(tempId);
    }
  }

  return tempId;
}

 remove(id: string): void {
  const index = this.ids.indexOf(id);
  this.ids.splice(index, 1);
}

 generator(): string {
  const isString = `${this.S4()}${this.S4()}-${this.S4()}-${this.S4()}-${this.S4()}-${this.S4()}${this.S4()}${this.S4()}`;

  return isString;
}

 idExists(id: string): boolean {
  return this.ids.includes(id);
}

 S4(): string {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

submit(){
  this.taskCreation.markAllAsTouched();
  if(this.taskCreation.valid){
    this.taskManagementService.appendTask(this.taskCreation.value);
    this.statusOfDialUpBox.emit(true);
  }

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
