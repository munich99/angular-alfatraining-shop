import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingCosts;

  constructor( private cartService:CartService ) { }

  ngOnInit() {
    // holt über Service cartService Verandkosten(shipping.json)
    this.shippingCosts = this.cartService.getShippingPrices();
    console.log(this.shippingCosts,"shippingCosts")
  }

  changeShipping(){
    
  }

}