import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

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
}