import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListTodoComponent } from "./components/list-todo.component";
import { AddTaskComponent } from "./components/add-task.component";


const routes: Routes = [
  { path: "", component: ListTodoComponent },
  { path: "addTask", component: AddTaskComponent },
  { path: "", redirectTo: "/", pathMatch: "full" },
  { path: "**", redirectTo: "/", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}