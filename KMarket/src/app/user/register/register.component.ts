import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { matchPasswords } from 'src/app/matchPasswords';
import { passwordValidator } from 'src/app/passwordValidator';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  errorMessage: string;
  passwordForm: FormGroup;
  emailForm: FormGroup;
  registerForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    
    this.passwordForm = this.fb.group(
      {
        password: ['', [Validators.required, passwordValidator]],
        confirmPassword: ['', [Validators.required, passwordValidator]],
      },
      { validator: matchPasswords }
    );
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get passwordControl() {
    return this.passwordForm.get('password');
  }
  get emailControl() {
    return this.emailForm.get('email');
  }
  get confirmPasswordControl() {
    return this.passwordForm.get('confirmPassword');
  }

  

  registerWithEmailAndPassword() {
    console.log(this.registerForm.value);

    const userData = Object.assign(this.registerForm.value, {
      email: this.registerForm.value.username,
    });
    this.authService
      .registerWithEmailAndPassword(userData)
      .then((res: any) => {
        this.router.navigate(['login']);
      })
      .catch((err: any) => {
        console.error(err);
        this.errorMessage=err;
        if(err == 'FirebaseError: Firebase: The email address is badly formatted. (auth/invalid-email).'){
          this.errorMessage = 'Email already in use!'
        }
      });
  }
  ngOnInit(): void {}

  loginWithGoogle() {
    this.authService
      .signInWithGoogle()
      .then((res: any) => {
        this.router.navigate(['home']);
      })
      .catch((err: any) => {
        console.error(err);
      });
  }
}
