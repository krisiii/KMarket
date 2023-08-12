import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
// import { CartComponent } from './cart/cart.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyComponent } from './verify/verify.component';
// import { ProfileComponent } from './profile/profile.component';
// import { AuthActivate } from '../core/guards/auth.activate';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    //canActivate: [AuthActivate],
  },
  {
    path: 'register',
    component: RegisterComponent,
    //canActivate: [AuthActivate],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    //canActivate: [AuthActivate],
  },
  // {
  //   path: 'cart',
  //   component: CartComponent,
  //   //canActivate: [AuthActivate],
  // },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    //canActivate: [AuthActivate],
  },
  {
    path: 'verify',
    component: VerifyComponent,
    //canActivate: [AuthActivate],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
