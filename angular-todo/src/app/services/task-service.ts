import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as moment from 'moment';

@Injectable({
    providedIn: 'root'
})
export class TodoTaskService {
    
    taskArr = [
    ];
    constructor(private snackbar: MatSnackBar){ }

    addTask(task){
        this.taskArr.push(task);
        let snackBarRef = this.snackbar.open("Task Added","Close"); 
    }

    getAllTask(){
        return this.taskArr;
    }

    validateDueDate(model){
        let dueDate = new Date(model.dueDate);
        const today = moment();
        console.log(today);
        const delta = today.diff(dueDate);
        console.log(delta);
        if( delta < 0) {
            return false;
        }else{
            let snackBarRef = this.snackbar.open("Due date must be a future date", "Close");
            return true;
        }
    }
}