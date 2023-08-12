import { AbstractControl, ValidationErrors } from '@angular/forms';

export function matchPasswords(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if (password?.value !== confirmPassword?.value) {
    return { passwordsMismatch: true };
  }

  return null;
}