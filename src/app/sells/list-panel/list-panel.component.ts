import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {Products} from '../../models/products';
import {ProductoSeleccionado} from '../../models/producto-seleccionado';

@Component({
  selector: 'app-list-panel',
  templateUrl: './list-panel.component.html',
  styleUrls: ['./list-panel.component.css']
})
export class ListPanelComponent implements OnInit, OnChanges {


  public products: Products[];
  public productosSeleccionados: ProductoSeleccionado[];

  @Input()
  public producto: ProductoSeleccionado;

  constructor() {
    this.productosSeleccionados = [];
  }

  ngOnInit(): void {
  }


  ngOnChanges(): void{
    if (this.productosSeleccionados[0] === undefined){
      this.productosSeleccionados.pop();
    }
    this.productosSeleccionados.push(this.producto);
    console.log(this.productosSeleccionados);
  }



}
