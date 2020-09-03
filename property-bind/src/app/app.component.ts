import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'property-bind';
  isDisabled : boolean = false;
  kenneth: string = 'Kenneth Phang';
  counter: number = 0;

  callClick(){
    console.log("test !");
    this.counter +=1;
  }
}
