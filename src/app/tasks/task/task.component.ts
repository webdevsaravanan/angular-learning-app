import { Component, inject, Input } from '@angular/core';
import { task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-task',
  standalone:true,
  imports: [CardComponent,DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
@Input({required:true}) task!:task;
private taskService = inject(TaskService);
onTaskCompleteClick(){
  this.taskService.removeTask(this.task.id);
}
}
