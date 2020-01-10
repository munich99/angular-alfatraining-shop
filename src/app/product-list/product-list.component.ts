import { Component } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('Produkt wurde geteilt'); // für Socialmdedia API
  }

  onNotify(){
    window.alert('Wir werden Sie über weitere Details informieren'); // Für Info Mail API
  }
}


