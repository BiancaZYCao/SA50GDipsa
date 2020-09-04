import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-todo';
  constructor(private router: Router){

  }
  addTask(){
    this.router.navigate(["/addTask"]);
  }

  goHome (){
    this.router.navigate(["/"]);
  }
}
