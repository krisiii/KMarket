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
import { KidsComponent } from './kids/kids.component';
import { BabiesComponent } from './kids-categories/babies/babies.component';
import { BoysComponent } from './kids-categories/boys/boys.component';
import { BoysShortsComponent } from './kids-categories/boys-shorts/boys-shorts.component';
import { WomenJacketsComponent } from './women-categories/jackets/jackets.component';
import { NewbornComponent } from './kids-categories/newborns/newborn.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'home',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
      },
      {
        path: ':itemID',
        component: DetailsComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'men',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: MenComponent,
      },
      {
        path: 'jackets',
        component: JacketsComponent,
      },
      {
        path: 'blazers',
        component: BlazersComponent,
      },
      {
        path: ':itemID',
        component: DetailsComponent,
      },
    ],
  },
  {
    path: 'women',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: WomenComponent,
      },
      {
        path: 'jackets',
        component: WomenJacketsComponent
      }
    ],
  },
  {
    path: 'kids',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: KidsComponent,
      },
      {
        path: 'babies',
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: BabiesComponent,
          },
          {
            path: 'newborn',
            component: NewbornComponent,
          },
        ],
      },
      {
        path: 'boys',
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: BoysComponent,
          },
          // {
          //   path: 'coats&jackets',
          //   component:
          // },
          {
            path: 'shorts',
            component: BoysShortsComponent,
          },
        ],
      },
    ],
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'cart',
    children: [
      {
        path: ':itemID',
        component: CartComponent,
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
