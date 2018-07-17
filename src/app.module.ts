import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form.component';

@NgModule({
  declarations: [AppComponent, DynamicFormComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
