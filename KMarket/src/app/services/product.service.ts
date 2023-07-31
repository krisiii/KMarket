import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Product } from '../products';
import {tap} from 'rxjs';
import {Plugins} from '@capacitor/core';
const {Storage} = Plugins;
const CART_STORAGE_KEY = 'MY_CART';


@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private product$$ = new BehaviorSubject<Product | undefined>(undefined);

  product$ = this.product$$.asObservable();

  cart = new BehaviorSubject({});
  productsCollection: AngularFirestoreCollection;

  product: Product | undefined;

  constructor(private afs: AngularFirestore, private http: HttpClient) {
    this.productsCollection = this.afs.collection('momos_v');
  }

  getProducts(){
    return this.productsCollection.valueChanges({idField:'itemID'});
  }

  

  getProduct(itemID:string){
    // console.log(this.product?.itemID);
    // return this.http.get<Product>(`http://localhost:4200/details/${this.product?.itemID}`)
    return this.http.get<Product>(`http://localhost:4200/home/${itemID}`)

    // return this.http
    //   .get<Product>(`http://localhost:4200/details/${itemID}`)
    //   .pipe(tap((product) => this.product$$.next(product)));
  }
}
