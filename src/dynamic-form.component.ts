import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  template: `
    <form [formGroup]="form">
      <div *ngFor="let prop of personProps">
        <label>{{ prop.label }}:</label>

        <div [ngSwitch]="prop.type">
          <input *ngSwitchCase="'text'" [type]="prop.type" [formControlName]="prop.key">
          <input *ngSwitchCase="'number'" [type]="prop.type" [formControlName]="prop.key">

          <div *ngSwitchCase="'radio'">
            <label *ngFor="let option of prop.options">
              <input type="radio"
                [name]="prop.key"
                [formControlName]="prop.key"
                [value]="option.value">

              {{ option.label }}
            </label>
          </div>

          <select *ngSwitchCase="'select'" [formControlName]="prop.key">
            <option *ngFor="let option of prop.options" [value]="option.value">
              {{ option.label }}
            </option>
          </select>
        </div>
      </div>
    </form>
    <pre>{{ form.value | json }}</pre>
  `,
  styles: []
})
export class DynamicFormComponent implements OnInit {
  form: FormGroup;
  @Input() formDataObj;
  personProps = [];

  ngOnInit() {
    const formDataObj = {};
    for (const prop of Object.keys(this.formDataObj)) {
      formDataObj[prop] = new FormControl(this.formDataObj[prop].value);

      this.personProps.push({
        key: prop,
        label: this.formDataObj[prop].label,
        type: this.formDataObj[prop].type,
        options: this.formDataObj[prop].options
      });
    }

    this.form = new FormGroup(formDataObj);
  }
}
