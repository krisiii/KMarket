import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { UserModule } from './user/user.module';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FirestoreModule } from '@angular/fire/firestore';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';
import { DetailsComponent } from './details/details.component'; 
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchComponent } from './search/search.component';
import { Database } from 'firebase/database';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { LoginComponent } from './user/login/login.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { NewComponent } from './men-categories/new/new.component';
import { JacketsComponent } from './men-categories/jackets/jackets.component';
import { BlazersComponent } from './men-categories/blazers/blazers.component';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, DetailsComponent, SearchComponent, MenComponent, WomenComponent, NewComponent, JacketsComponent, BlazersComponent, CartComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    UserModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    FirestoreModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule
    
      ],
  providers: [LoginComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
