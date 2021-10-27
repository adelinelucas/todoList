import { Injectable } from '@angular/core';
import { Todo } from '../interface/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor() { }

  getTodos(): Todo[] {
    return [
      {
        'id':1,
        'title': "Tâche 1",
        'completed' : false,
      },
      {
        'id':2,
        'title': "Tâche 2",
        'completed' : false,
      },
      {
        'id':3,
        'title': "Tâche 3",
        'completed' : false,
      }
    ]
  }
}
