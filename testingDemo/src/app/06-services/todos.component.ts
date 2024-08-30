
import { TodoService } from './todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos', // O seletor usado para incluir este componente em outros templates
  templateUrl: './todos.component.html' // O caminho para o template HTML do componente
})

export class TodosComponent { 
  todos: any[] = [];
  message: string | null = null; 

  constructor(private service: TodoService) {}

  ngOnInit() { 
    this.service.getTodos().subscribe(t => this.todos = t);
  }

  add() { 
    var newTodo = { title: '... ' };
    this.service.add(newTodo).subscribe(
      t => this.todos.push(t),
      err => this.message = err);
  }

  delete(id:number) {
    if (confirm('Are you sure?'))
      this.service.delete(id).subscribe();
  }  
}
