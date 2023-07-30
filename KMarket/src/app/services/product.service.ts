import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import {Plugins} from '@capacitor/core';
const {Storage} = Plugins;
const CART_STORAGE_KEY = 'MY_CART';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  cart = new BehaviorSubject({});
  productsCollection: AngularFirestoreCollection;

  constructor(private afs: AngularFirestore) {
    this.productsCollection = this.afs.collection('momos_v');
    // this.loadCart();
  }

  getProducts(){
    return this.productsCollection.valueChanges({idField:'id'});
  }

  // async loadCart(){
  //   const result = await Storage.get({key: CART_STORAGE_KEY})
  //   if(result.value){
      
  //   }
  // }
}
