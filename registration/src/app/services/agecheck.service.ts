import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class AgeCheckService {
    constructor(private snackbar: MatSnackBar){ }

    validateUnderAge(model){
        let dobDate = new Date(model.dob);
        const today = moment();
        console.log(today);
        const delta = today.diff(dobDate, "years", false);
        if( delta < 18) {
            console.log("illegal !");
            let snackBarRef = this.snackbar.open("Registrant must be at least 18 years old and above", "Close");
            return true;
        }else{
            return false;
        }
    }
}