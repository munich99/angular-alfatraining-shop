import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items;  
  totalprice;    

  registerForm: FormGroup;
  submitted = false;
  thx = false;

  constructor(
    private cartService:CartService,
    private  formBuilder:FormBuilder) {  
      // holt Bestellliste und Gesamtpreis vom CartService-Methode    
      this.items = this.cartService.getItems();
      this.totalprice = this.cartService.totalPrice();

      // console.log(this.items.lenght,"länge")
      console.log(this.totalprice,"abgezogen cart");

      // Variablen Deklaration für Lieferadresse aus dme Formular    
      this.registerForm = this.formBuilder.group({  
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }    

  onSubmit() {
    this.submitted = true; 
    // Geht zum Formular zurück, falls unvollständig
    if (this.registerForm.invalid) {
        return;
    }
    // Löschen der gesamten Bestellung
    this.clearList();
    // dankes Text
    this.thx = !this.thx;
  }

  clearList(){
    // Bestellliste löschen
    this.items = this.cartService.removeItems();
  }

  clearArticle(orderId){
    // Geasamtpreis anpassen
    this.totalprice = this.totalprice - this.items[orderId].price 
    // Artikel löschen
    this.cartService.removeArticle(orderId);
  }

    
}