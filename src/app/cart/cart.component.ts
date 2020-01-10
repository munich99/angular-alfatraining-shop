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
  // email checkoutForms;
  thx:boolean = false;

  registerForm: FormGroup;
  submitted = false;

  constructor(
    private cartService:CartService,
    private  formBuilder:FormBuilder) {  
      // holt Bestellliste und Gesamtpreis vom CartService-Methode    
      this.items = this.cartService.getItems();
      this.totalprice = this.cartService.totalPrice();
      // console.log(this.items.lenght,"länge")
      console.log(this.totalprice,"abgezogen cart");
      // Variablen Deklaration für Lieferadresse aus dme Formular
      // email this.checkoutForms = this.formBuilder.group(  {name:'', adress:''}  );      

      this.registerForm = this.formBuilder.group({
      
     
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
});
  }    

 /* email onSubmit(customerData){    
    console.log(customerData, "Formulardaten")
    if(customerData.name != "" && customerData.adress != ""){      
      // Verbraucher Daten werden an den Server/Backend geschickt
      console.warn("Ihre Bestellung wurde jetz übermittelt", customerData)
      // Löschen der gesamten Bestellung
      this.clearList();
      // Löschen der Zustellungs Informationen
      this.checkoutForms.reset();
      // dankes Text
      this.thx = !this.thx;
    } else{
      alert("bitte beide Felder vollständig ausfüllen");
    }
  }
  */

  onSubmit() {
    this.submitted = true;
 
    // stop the process here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
 
    alert('SUCCESS!!');
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