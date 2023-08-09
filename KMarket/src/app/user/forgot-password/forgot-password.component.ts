import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  email: string = '';
  constructor(private userService: UserService) {}
  ngOnInit(): void {}
  sendLink() {
    this.userService.forgotPassword(this.email)
    this.email='';
  }
}
