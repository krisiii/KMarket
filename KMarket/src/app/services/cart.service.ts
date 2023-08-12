import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { User } from '../user';
import { Auth } from 'firebase/auth';
import { switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService implements OnInit {
  public productList = new BehaviorSubject<any>([]);
  public cartItemList: any = [];

  productsCollection: AngularFirestoreCollection;

  constructor(public afs: AngularFireAuth, private af: AngularFirestore) {

  }
  ngOnInit(): void {}


  uid: any;
  getProducts() {
    return this.afs.authState.pipe(
      switchMap((user) => {
        if (user) {
          let uid = user.uid.toString();
          this.productsCollection = this.af.collection(`cart/Cart Products/${uid}`);
          console.log(uid);
          
          return this.productsCollection.valueChanges({ idField: 'itemID' });
        } else {
          // Handle the case where user is not authenticated
          return [];
        }
      })
    );
  }

  cartAdd(product: any) {

    
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    console.log(this.cartItemList);


    const Product = {
      itemID: product.itemID,
      itemName: product.itemName,
      itemPrice: product.itemPrice,
      itemSize: product.itemSize,
      itemCategory: product.itemCategory,
      itemGender: product.itemGender,
      itemImage: product.itemImage,
      itemDescription: product.description,
      itemQuantity: 0,
    };

    this.afs.authState.subscribe((user) => {
      const uid = user?.uid.toString();
      this.af
        .collection('cart')
        .doc('Cart Products')
        .collection(`${uid}`)
        .doc(product.itemID)
        .set(Product);
        
    });

  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.total;
    });
    return grandTotal;
  }

  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.itemID === a.itemID) {
        this.cartItemList.splice(index, 1);
      }
    });
    this.productList.next(this.cartItemList);
  }
  removeAllCartItems() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}
