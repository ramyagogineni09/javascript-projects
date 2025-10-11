import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Todoservice } from '../todoservice';

@Component({
  selector: 'app-todolist',
  imports: [NgFor],
  templateUrl: './todolist.html',
  styleUrl: './todolist.css'
})
export class Todolist implements OnInit {
  constructor(private ts:Todoservice){}

  todos:any;

  ngOnInit(): void {
      this.todos=this.ts.todoList
  }

  removeTodo(index:any){
    this.ts.deleteTodo(index)
  }
}
