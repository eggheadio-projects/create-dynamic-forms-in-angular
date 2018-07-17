import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  template: `
    <form [formGroup]="form">
      <div *ngFor="let prop of personProps">
        <input type="text" [formControlName]="prop">
      </div>
    </form>
    <pre>{{ form.value | json }}</pre>
  `,
  styles: []
})
export class DynamicFormComponent implements OnInit {
  form: FormGroup;
  person = {
    firstname: 'Juri',
    age: 32,
    surname: 'Strumpflohner',
    twitter: '@juristr'
  };
  personProps = [];

  ngOnInit() {
    const formDataObj = {};
    for (const prop of Object.keys(this.person)) {
      formDataObj[prop] = new FormControl(this.person[prop]);
      this.personProps.push(prop);
    }

    this.form = new FormGroup(formDataObj);
  }
}
