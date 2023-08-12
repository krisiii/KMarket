import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css'],
})
export class WomenComponent {
  products: Observable<any[]>;

  constructor(
    private productService: ProductService,
    public fireAuth: AngularFireAuth,
    private cartService: CartService
  ) {}

  isLoggedIn = false;

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.productService.getProducts().subscribe((res) => {
      console.log(res);

      this.fireAuth.authState.subscribe((user) => {
        if (user) {
          this.isLoggedIn = true;
        }
        console.log(this.isLoggedIn);
      });
    });
  }
  ngAfterViewInit(): void {}

  searchText: string = '';

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    console.log(this.searchText);
  }
  addToCart(p: any) {
    this.cartService.cartAdd(p);
    window.alert('Added to cart successfully!');
  }
}
