import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product;
  items;

  constructor(
    private route:ActivatedRoute,
    private cartService:CartService) {
      // holt Bestellliste vom CartService-Methode, um Link Warenkorb einzublenen, wenn er befüllt ist
      this.items = this.cartService.getItems();
     }

  ngOnInit() {
    // schaut nach. welches Produkt ausgewählt wurde

    // holt sich das das Elternteil
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')]
    });
  }

  addToCart(product){
    window.alert("Ihr Produkt wurde in den Warenkorb hinzugefügt")
    // Schickt Bestellung zu Bestellliste nach CartService-Methode
    this.cartService.addToCart(product);
  }
}