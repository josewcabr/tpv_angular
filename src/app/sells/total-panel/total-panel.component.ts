import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {ProductoSeleccionado} from '../../models/producto-seleccionado';

@Component({
  selector: 'app-total-panel',
  templateUrl: './total-panel.component.html',
  styleUrls: ['./total-panel.component.css']
})
export class TotalPanelComponent implements OnInit, OnChanges {

  listaCompra: ProductoSeleccionado [];

  @Input()
  sumaTotal: number;

  constructor() {

  }

  ngOnInit(): void {

  }

  ngOnChanges(): void{

  }


}
