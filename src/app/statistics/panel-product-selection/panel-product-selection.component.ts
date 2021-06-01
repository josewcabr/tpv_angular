import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Products} from '../../models/products';

@Component({
  selector: 'app-panel-product-selection',
  templateUrl: './panel-product-selection.component.html',
  styleUrls: ['./panel-product-selection.component.css']
})
export class PanelProductSelectionComponent implements OnInit {

  value: string;

  @Output()
  seleccionProdEmit = new EventEmitter<Products>();

  constructor() { }

  ngOnInit(): void {

    this.value = '';
  }

  buscarProducto(value): void{
    this.seleccionProdEmit.emit(value);
    this.value = '';
  }
}
