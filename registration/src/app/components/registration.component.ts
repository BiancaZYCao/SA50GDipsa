import { Component, OnInit } from '@angular/core';
import { Registration } from '../models/register';
import { AgeCheckService } from '../services/agecheck.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  // \b[\w\.-]+@[\w\.-]+\.\w{2,4}\b
  model: Registration;
  gender = [{name:'Male', value: 'M'}, 
      {name:'Female', value:'F'}];

  nationalities = [{name: 'Singapore', value: 'SG'},
        {name: 'Malaysia', value: 'MY'}, 
        {name: 'Indonesia', value: 'ID'},
        {name: 'United States', value: 'USA'}
  ]    

  ageCheckFlag: boolean;

  constructor(private ageCheckSvc: AgeCheckService) { 
    this.model = new Registration('', '','F', '', '', '', '');
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.model.email);
    console.log(this.model.name);
    console.log(this.model.password);
    console.log(this.model.gender);
    console.log(this.model.country);
  }

  resetForm(){
    this.model.email = '';
    this.model.password = '';
    this.model.name = '';
    this.model.gender = 'F';
    this.model.dob = '';
    this.model.country = '';
    this.model.contactNo = '';
  }

  checkAge(){
    console.log("check age ...");
    let flag = this.ageCheckSvc.validateUnderAge(this.model);
    console.log(flag);
    this.ageCheckFlag = flag;
  }

}
