import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UploadProductService {

  constructor(private afs: AngularFirestore, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.getObjectById(params['itemID'])
    })
   }
   getObjectById(itemID:any){
    return this.afs.collection('products').doc(itemID).ref;
   }
}
