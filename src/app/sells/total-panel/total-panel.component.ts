import {Component, Input, OnInit, OnChanges, Output, EventEmitter} from '@angular/core';
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

  @Output()
  pagoEmit = new EventEmitter<boolean>();

  constructor() {

  }

  ngOnInit(): void {

  }

  ngOnChanges(): void{

  }

  pagar(): void{
    this.pagoEmit.emit(true);
  }


}
