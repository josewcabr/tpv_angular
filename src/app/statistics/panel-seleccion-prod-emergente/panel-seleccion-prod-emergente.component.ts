import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Products} from '../../models/products';

@Component({
  selector: 'app-panel-seleccion-prod-emergente',
  templateUrl: './panel-seleccion-prod-emergente.component.html',
  styleUrls: ['./panel-seleccion-prod-emergente.component.css']
})
export class PanelSeleccionProdEmergenteComponent implements OnInit {

  @Input()
  listaProductos: Products[];

  panelSelect: boolean;

  @Output()
  seleccionProdEmit = new EventEmitter<Products>();

  constructor() { }

  ngOnInit(): void {
    this.panelSelect = true;
  }

  seleccionProd(prod: Products): void{
    this.panelSelect = true;
    this.seleccionProdEmit.emit(prod);
  }
}
