import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Todoservice {
  taskId=3

   todoList=[
    {
      id:1,"task":"task1"
    },
    {
      id:2,"task": "task2"
    }
  ]
  constructor(){}

  addTodo(taskName:any){
    this.todoList.push({"id":this.taskId++,'task':taskName})

  }
  deleteTodo(index:any){
    this.todoList.splice(index,1)

  }
  
}
