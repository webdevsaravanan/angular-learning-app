import { Component,Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskService } from './task.service';
@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, NewTaskComponent]
})
export class TasksComponent {
@Input({required:true}) id!:string;
@Input({required:true}) name!:string;
constructor(private taskService:TaskService ){}
disableTaskWindow=false;

get selectedUserTasks(){
  return this.taskService.getUserTasks(this.id);
}

openNewTaskWindow(){
this.disableTaskWindow=true;
}
onCancelBtnClick(enabled:Boolean){
  this.disableTaskWindow=false;
}
}
