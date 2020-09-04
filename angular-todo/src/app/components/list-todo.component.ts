import { Component, OnInit } from '@angular/core';
import { TodoTaskService } from '../services/task-service';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {
  tasks = [];
  constructor(private todoSvc: TodoTaskService) { }

  ngOnInit(): void {
    this.tasks = this.todoSvc.getAllTask();
  }

  

}

