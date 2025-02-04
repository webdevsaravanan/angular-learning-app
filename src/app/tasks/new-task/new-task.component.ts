import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-task',
  standalone:true,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
  imports: [FormsModule]
})
export class NewTaskComponent {
@Input() userId!:string;
@Output() close = new EventEmitter<Boolean>();
private taskService = inject(TaskService);
enteredTitle='';
enteredSummary='';
enteredDueDate='';
onCancelClick(){
  this.close.emit(true);
} 
onAddTaskSubmit(){
  this.taskService.addTask({
    title:this.enteredTitle,
    summary:this.enteredSummary,
    dueDate:this.enteredDueDate
  },this.userId);
  this.close.emit(true);
}
}
