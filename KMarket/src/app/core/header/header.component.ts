import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Product } from 'src/app/products';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public totalItem: number = 0;
  products: Product | undefined;
  object: Promise<Product | null>;
  constructor(
    public fireAuth: AngularFireAuth,
    private router: Router,
    public db: AngularFireDatabase,
    private cartService: CartService,
    private productService: ProductService
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

    });

    // this.cartService.getProducts().subscribe(res=>{
    //   this.totalItem = res.length;
    // })
  }
}
