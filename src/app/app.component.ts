import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS } from './dummy-users';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users=DUMMY_USERS;
  selectedUserId="u1";
  get selectedUser(){
    return this.users.find(user=>user.id===this.selectedUserId)!;
  }
  onUserSelect(id:string){
    this.selectedUserId=id;
  }
}
