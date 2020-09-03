import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Directives';
  meetings = [ 'orange' , 'durian', 'jackfruit'];
  isPart : number = 0;

  showPart(value){ 
    this.isPart = value;
  }

  sizeChanged(size){
    console.log(`font size: ${size}`);
  }

}
