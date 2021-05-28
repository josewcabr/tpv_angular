import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Client} from '../../models/client';


@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit, OnChanges {

  @Input()
  listaClientes: Client[];

  filteredListClient: Client[];

  value: string;

  ventanaSeleccion: boolean;

  @Output()
  clienteEmit = new EventEmitter<Client>();

  constructor() {
    this.value = '';
  }

  ngOnInit(): void {

  }

  ngOnChanges(): void{
    this.filteredListClient = this.listaClientes;
  }

  seleccionaCliente(cliente): void{
   this.clienteEmit.emit(cliente);
   this.ventanaSeleccion = true;
   // console.log(cliente);
  }

  filtrarCliente(value): void{
    this.filteredListClient = this.filteredListClient.filter(prod => prod.name.toLowerCase().includes(value));
  }

  btn_cancelar_busq(): void{
    this.filteredListClient = this.listaClientes;
    this.value = '';
  }

}
