import { Component, signal } from '@angular/core';

import { Todoform } from './todoform/todoform';
import { Todolist } from './todolist/todolist';

@Component({
  selector: 'app-root',
  imports: [Todoform,Todolist],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('Angularapp');
}
