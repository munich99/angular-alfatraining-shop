import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  @Input() product; // holt sich die Preise von product-detals
  @Output() notify = new EventEmitter(); // übergibt Event zum Klicken und HTML Button an product-details, wenn Preis größer als 700

  constructor() { }

  ngOnInit() {
  }

}