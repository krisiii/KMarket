import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription } from 'rxjs';
import { tap } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private fireAuth: AngularFireAuth, private router: Router) {}
  forgotPassword(email: string) {
    this.fireAuth.sendPasswordResetEmail(email).then(() => {
      this.router.navigate(['/verify']);
    },err=>{
        alert(err.message)
    });
  }
}
