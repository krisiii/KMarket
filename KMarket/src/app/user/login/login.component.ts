import { Component, OnInit } from '@angular/core';
import { DEFAULT_EMAIL_DOMAINS } from '../constants';

import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { passwordValidator } from 'src/app/passwordValidator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  passwordForm: FormGroup;
  emailForm: FormGroup;
  errorMessage: string;

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });
  constructor(
    private router: Router,
    private authService: AuthService,
    private afs: AngularFireAuth,
    private fb: FormBuilder
  ) {
    this.passwordForm = this.fb.group({
      password: ['', [Validators.required, passwordValidator]],
    });
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {}

  get passwordControl() {
    return this.passwordForm.get('password');
  }
  get emailControl() {
    return this.emailForm.get('email');
  }

  provider: any;

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

  loginWithEmailAndPassword() {
    console.log(this.loginForm.value);

    const userData = Object.assign(this.loginForm.value, {
      email: this.loginForm.value.username,
    });
    console.log(userData);
    this.authService
      .signWithEmailAndPassword(userData)
      .then((res: any) => {
        this.router.navigate(['home']);
      })
      .catch((err: any) => {
        console.error(err);
        this.errorMessage = err;
      });
  }

  forgotPassword(email: string) {
    this.afs.sendPasswordResetEmail(email).then(() => {
      this.router.navigate([]);
    });
  }

  
}
