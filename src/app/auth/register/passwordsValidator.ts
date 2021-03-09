import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const passwordMatchValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const password = control.get('password').value.trim();
  const confirmPassword = control.get('confirmPassword').value.trim();

  return password && confirmPassword && <any>password === <any>confirmPassword
    ? null
    : { match: true };
};
