import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

   // Variable für Bestellliste und Gesamtpreis
  items;  
  totalprice;    

  // Formular Variable, in der die gesamte Formulareigenschaft gespeichert wird 
  registerForm: FormGroup;
  submitted = false;

  // Variable für Dankeschön nach der Bestellung und falls Warenkorb leer ist
  thx = false;

  constructor(
    private cartService:CartService, // Instanz für Bestellliste
    private  formBuilder:FormBuilder) // Instanz des Angular FormBuilder
    {  
      // holt Bestellliste und Gesamtpreis vom CartService-Methode    
      this.items = this.cartService.getItems();
      this.totalprice = this.cartService.totalPrice();

      // console.log(this.items.lenght,"länge")
      console.log(this.totalprice,"abgezogen cart");

      // Deklarieren aller Formular verfügbaren Formularfelder und  deren Validierungsregeln
      this.registerForm = this.formBuilder.group({  
        firstName: ['', Validators.required],
        lastName: ['', [Validators.required, Validators.minLength(2)]],
        adress: ['', Validators.required],
        city: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
               
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