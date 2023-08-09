import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { getAuth } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit{
  // user: User | undefined;
  constructor(public afs: AngularFireAuth) {}

  ngOnInit(): void {
    this.afs.authState.subscribe((user)=>{
      console.log(user);
    })
  }
}
