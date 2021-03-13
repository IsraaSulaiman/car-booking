import { AuthService } from './../auth.service';
import { passwordMatchValidator } from './passwordsValidator';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  public registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
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
    this.authService.register(this.registerForm.value).subscribe(
      (resp: any) => {
        if (resp.isSuccess) this.router.navigate(['/auth/login']);
      },
      (error) => console.log(error, 'error')
    );
  }

  canDeactivate(): boolean | Observable<boolean> {
    if (this.registerForm.untouched) return true;
    else
      return of(
        window.confirm(
          `The changes will be dismissed. Are you sure you don't want to continue making the account?`
        )
      );
  }
}
