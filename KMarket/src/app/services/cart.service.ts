import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

import { switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService implements OnInit {
  public productList = new BehaviorSubject<any>([]);
  public cartItemList: any = [];

  productsCollection: AngularFirestoreCollection;

  constructor(public afs: AngularFireAuth, private af: AngularFirestore) {}
  ngOnInit(): void {}

  uid: any;
  getProducts() {
    return this.afs.authState.pipe(
      switchMap((user) => {
        if (user) {
          let uid = user.uid.toString();
          this.productsCollection = this.af.collection(
            `cart/Cart Products/${uid}`
          );
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
      // a.itemPrice = +a.itemPrice;
      grandTotal += a.itemPrice;
      console.log(grandTotal);
    });
    return grandTotal;
  }

  removeCartItem(product: any) {
    this.afs.authState.subscribe((user) => {
      const uid = user?.uid.toString();
      const data = this.af
        .collection(`/cart/Cart Products/${uid}`)
        .doc(`${product.itemID}`);
      data.delete();
      data
        .delete()
        .then(() => {
          console.log('Document successfully deleted!');
        })
        .catch((error) => {
          console.error('Error removing document: ', error);
        });
    });
    console.log(product.itemID);
  }
  removeAllCartItems() {
    this.afs.authState.subscribe((user) => {
      const uid = user?.uid.toString();
      const data = this.af.collection(`cart/Cart Products/${uid}`);

      data.get().subscribe((a) => {
        a.forEach((doc) => {
          doc.ref
            .delete()
            .then(() => {
              console.log('Document successfully deleted!');
            })
            .catch((error) => {
              console.error('Error removing document: ', error);
            });
        });
      });
    });
  }
}
