import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interface/todo';
import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  listTodos : Todo[];
  newTodo: string;
  idForTodo: number;

  constructor(private service : TodoListService ) { }

  ngOnInit(): void {

    this.listTodos = this.service.getTodos();
    this.idForTodo = this.listTodos.length + 1 ;
  }
  // Ajouter une tâche
  addTodo() : void {
    console.log("toto");

    this.listTodos.push({
      id: this.idForTodo,
      title: this.newTodo,
      completed: false,
    });

    this.newTodo ="";
    this.idForTodo++;
  }

  // Supprimer une tâche
  deleteTodo(idTodo: number): void {
    this.listTodos = this.listTodos.filter(todo => todo.id !== idTodo);
  }

  // Cocher toutes les t$eches
  checkAll(event): void {
    let isChecked = event.target.checked;

    this.listTodos.forEach(
      todo => todo.completed = isChecked
    );
  }

  // Combien de tâches restantes
  todosRemaining(): number {
    return this.listTodos.filter(todo =>!todo.completed).length;
  }

  // Supprimer les taches cochées
  clearCompleted(): void {
    this.listTodos = this.listTodos.filter(todo =>!todo.completed);
  }

  // Affichage du bouton suppression taches
  atLeastOneTodoCompleted(): boolean {
    return this.listTodos.filter(todo=>todo.completed).length > 0 ;
  }
}

