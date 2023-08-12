import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { DetailsComponent } from './details/details.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { JacketsComponent } from './men-categories/jackets/jackets.component';
import { BlazersComponent } from './men-categories/blazers/blazers.component';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'home',
    children:[
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
      },
      {
        path: ':itemID',
        component: DetailsComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'men',
    children:[
      {
        path: '',
        pathMatch: 'full',
        component: MenComponent
      },
      {
        path: 'jackets',
        component: JacketsComponent
      },
      {
        path: 'blazers',
        component: BlazersComponent
      },
      {
        path: ':itemID',
        component: DetailsComponent
      },
    ]
    
  },
  {
    path: 'women',
    component: WomenComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'cart', 
    children:[
      {
        path: ':itemID',
        component: CartComponent
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
