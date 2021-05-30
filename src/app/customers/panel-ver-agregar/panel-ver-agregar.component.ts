import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-panel-ver-agregar',
  templateUrl: './panel-ver-agregar.component.html',
  styleUrls: ['./panel-ver-agregar.component.css']
})
export class PanelVerAgregarComponent implements OnInit {

  value: string;

  @Output()
  seleccionClientEmit = new EventEmitter<boolean>();

  @Output()
  nuevoClientEmit = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    this.value = '';
  }

  buscarCliente(value): void{
    this.seleccionClientEmit.emit(value);
    this.value = '';
  }

  addCliente(): void{
    this.nuevoClientEmit.emit(true);
  }

}
