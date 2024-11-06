import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  formData = {
    name: '',
    password: '',
  };

  onSubmit() {
    console.log(this.formData);
  }
}
