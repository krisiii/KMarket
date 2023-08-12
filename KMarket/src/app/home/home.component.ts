import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: Observable<any[]>;
  public productList: any;

  constructor(
    private productService: ProductService,
    public fireAuth: AngularFireAuth,
    private cartService: CartService,
  ) {}

  isLoggedIn = false;

  ngOnInit(): void {
    this.fireAuth.authState.subscribe((user) => {
      console.log(user);
    });

    this.products = this.productService.getProducts();
    this.productService.getProducts().subscribe((res) => {
      this.productList = res;

      this.productList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.itemPrice });
        console.log(a);
      });

      this.fireAuth.authState.subscribe((user) => {
        if (user) {
          this.isLoggedIn = true;
        }
        console.log(this.isLoggedIn);
      });
    });
  }

  addToCart(p: any) {
    this.cartService.cartAdd(p);
    window.alert('Added to cart successfully!')
  }
  searchText: string = '';

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    console.log(this.searchText);
  }
}
