import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Product } from 'src/app/products';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  products: Product | undefined;
  object: Promise<Product | null>;
  constructor(
    public fireAuth: AngularFireAuth,
    private router: Router,
    public db: AngularFireDatabase,
  ) {}
  isLoggedIn = false;

  async logout() {
    return this.fireAuth.signOut().then(() => {
      this.isLoggedIn = false;
      this.router.navigate(['login']);
    });
  }

  userData = {};

  ngOnInit(): void {
    this.fireAuth.authState.subscribe((user) => {
      if (user) {
        this.isLoggedIn = true;
      }
      console.log(this.isLoggedIn);
      const token = user?.uid;
      console.log(token);
    });
  }
}
