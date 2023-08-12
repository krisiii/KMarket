import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { getAuth } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { BehaviorSubject } from 'rxjs';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  // user: User | undefined;

  public products: any = [];
  public grandTotal!: number;
  constructor(public afs: AngularFireAuth, private cartService: CartService) {}

  ngOnInit(): void {
    this.afs.authState.subscribe((user) => {
      console.log(user?.uid);
    });

    this.cartService.getProducts().subscribe((res) => {
      this.products = res;

      // this.products.forEach((a: any) => {
      //   Object.assign(a, { quantity: 1, total: a.itemPrice });
      // });
      console.log(this.products);

      this.grandTotal = this.cartService.getTotalPrice();
    });
  }
  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }

  emptyCar() {
    this.cartService.removeAllCartItems();
  }
}
