import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  hide: boolean = true;
  passwordControl: FormControl = new FormControl('', Validators.required);

  registerForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
  });

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
      });
  }
  ngOnInit(): void {}
}
