import { Component,Input,Output,EventEmitter, output} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone:true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
@Input({required:true}) avatar!:string;
@Input({required:true}) name!:string;
@Input({required:true}) id!:string;

@Output() select =new EventEmitter<string>();
  
  get imagePath(){
  return 'assets/users/'+this.avatar
  }
onUserClick(){ 
  this.select.emit(this.id);
}
}
