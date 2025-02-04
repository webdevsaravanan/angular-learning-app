import { DUMMY_TASKS } from '../dymmy-tasks';
import { newTaskData } from './task/task.model';
import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
export class TaskService{
    private tasks=DUMMY_TASKS;
    constructor(){
        const tasks=localStorage.getItem('tasks');
        if(tasks){
            this.tasks=JSON.parse(tasks);
        }
    }
    getUserTasks(userId: string){
        return this.tasks.filter((tasks)=>tasks.userId==userId);
    }
   removeTask(id:string){
    this.tasks=this.tasks.filter((tasks)=>tasks.id!==id);
    this.saveTasks();
    }
    addTask(taskData:newTaskData,id:string){
    this.tasks.unshift({
            id:new Date().getTime().toString(),
            userId:id,
            title:taskData.title,
            summary:taskData.summary,
            dueDate:taskData.dueDate,
          });
    this.saveTasks();
    }
    private saveTasks(){
        localStorage.setItem('tasks',JSON.stringify(this.tasks));
    }
}