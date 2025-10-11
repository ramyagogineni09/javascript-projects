import { CommonModule } from '@angular/common';
import { Component,  OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todoservice } from '../todoservice';




@Component({
  selector: 'app-todoform',
  imports: [CommonModule,FormsModule],
  templateUrl: './todoform.html',
  styleUrl: './todoform.css'
})
export class Todoform  implements OnInit{
  taskInput="";

constructor(private ts:Todoservice){}
ngOnInit(): void {
    
}

addTask(){
this.ts.addTodo(this.taskInput)  
this.taskInput=""
}
resetForm(){
  this.taskInput=""

}

}
