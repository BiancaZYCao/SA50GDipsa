import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TodoTaskService } from '../services/task-service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  model: Task;
  dueDateCheckFlag: boolean;

  priorities = [
    {name: 'Low', value: 'L'},
    {name: 'Medium', value: 'M'},
    {name: 'High', value: 'H'}  
  ];
  constructor(private todoSvc: TodoTaskService,
    private router: Router) { 
    this.model = new Task('', 'H','');
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.todoSvc.addTask(this.model);
    this.router.navigate(["/"]);
  }

  resetForm(){
    this.model.dueDate = "";
    this.model.name = "";
    this.model.priority = "H";
  }

  checkDueDate(){
    this.dueDateCheckFlag = this.todoSvc.validateDueDate(this.model);
  }

}
