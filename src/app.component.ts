import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Dynamic reactive forms in Angular</h1>
    <app-dynamic-form [formDataObj]="person"></app-dynamic-form>
  `
})
export class AppComponent {
  person = {
    firstname: {
      label: 'Firstname',
      value: 'Juri',
      type: 'text'
    },
    age: {
      label: 'Age',
      value: 32,
      type: 'number'
    },
    city: {
      label: 'City',
      value: 'LA',
      type: 'select',
      options: [
        { label: '(choose one)', value: '' },
        { label: 'New York', value: 'NY' },
        { label: 'Los Angeles', value: 'LA' },
        { label: 'Salt Lake City', value: 'SLC' }
      ]
    }
  };
}
