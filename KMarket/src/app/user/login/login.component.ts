import { Component, OnInit } from '@angular/core';
import { DEFAULT_EMAIL_DOMAINS } from '../constants';

import { Router } from '@angular/router';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAction } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide: boolean = true;
  passwordControl: FormControl = new FormControl('', Validators.required);

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });
  // appEmailDomains = DEFAULT_EMAIL_DOMAINS;
  constructor(private router: Router, private authService: AuthService, private afs: AngularFireAuth) {}

  ngOnInit(): void {}

  provider:any;


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
      });
  }

  getProfilePage() {
    console.log(this.loginForm.value);
  }

  forgotPassword(email: string) {
    this.afs.sendPasswordResetEmail(email).then(()=>{
      this.router.navigate([])
    })
  }
}
