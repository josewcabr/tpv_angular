import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Client} from '../../models/client';
import {ProductoSeleccionado} from '../../models/producto-seleccionado';

@Component({
  selector: 'app-panel-selec-cliente',
  templateUrl: './panel-selec-cliente.component.html',
  styleUrls: ['./panel-selec-cliente.component.css']
})
export class PanelSelecClienteComponent implements OnInit {

  @Input()
  listaClientes: Client[];

  panelSeleccion: boolean;

  @Output()
  clientSelectedEmit = new EventEmitter<Client>();

  constructor() { }

  ngOnInit(): void {
    this.panelSeleccion = true;
  }

  seleccionCliente(client: Client): void{
    this.clientSelectedEmit.emit(client);
  }

}
