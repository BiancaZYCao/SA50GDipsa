import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { MaterialModule } from './material-module';
import { AppRoutingModule } from './app-routing';

import { ListTodoComponent } from './components/list-todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import { FlexLayoutModule } from "@angular/flex-layout";
import { AddTaskComponent } from './components/add-task.component';

@NgModule({
  declarations: [
    AppComponent,
    ListTodoComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
