import { Component, OnInit } from '@angular/core';
import { Registration } from '../models/register';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  // \b[\w\.-]+@[\w\.-]+\.\w{2,4}\b
  model: Registration;

  constructor() { 
    this.model = new Registration('', '','M', '', '', '', '');
  }

  ngOnInit(): void {
  }

  onSubmit(){

  }

}
