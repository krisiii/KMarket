import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordValidator(control: AbstractControl): ValidationErrors | null {
  const value: string = control.value;

  // Password must have at least 8 characters
  if (value.length < 8) {
    return { minLength: true };
  }

  // Password must have at least one uppercase letter
  if (!/[A-Z]/.test(value)) {
    return { uppercase: true };
  }

  // Password must have at least one lowercase letter
  if (!/[a-z]/.test(value)) {
    return { lowercase: true };
  }

  // Password must have at least one digit
  if (!/\d/.test(value)) {
    return { digit: true };
  }

  // Password must not contain spaces
  if (/\s/.test(value)) {
    return { noSpaces: true };
  }

  // Password is valid
  return null;
}