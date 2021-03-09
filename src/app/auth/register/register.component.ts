import { passwordMatchValidator } from './passwordsValidator';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        mobile: ['', Validators.required],
        email: ['', { validators: [Validators.required, Validators.email] }],
        ID: [
          '',
          { validators: [Validators.required, Validators.minLength(11)] },
        ],
        city: ['', Validators.required],
        password: [
          '',
          { validators: [Validators.required, Validators.minLength(8)] },
        ],
        confirmPassword: ['', { validators: [Validators.required] }],
      },
      { validators: passwordMatchValidator }
    );
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }
}
