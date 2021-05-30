import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Client} from '../../models/client';

@Component({
  selector: 'app-panel-add-cliente',
  templateUrl: './panel-add-cliente.component.html',
  styleUrls: ['./panel-add-cliente.component.css']
})
export class PanelAddClienteComponent implements OnInit {

  panelForm: boolean;

  nuevoCliente: Client;

  nombre: string;
  apellido: string;
  phone: string;

  @Output()
  nuevoClientEmit = new EventEmitter<Client>();

  constructor() { }

  ngOnInit(): void {
    this.panelForm = true;
  }

  addCliente(): void{

    if (this.nombre !== undefined && this.apellido !== undefined && this.phone !== undefined){
      this.nuevoCliente = {
        name : this.nombre,
        lastName : this.apellido,
        phone: this.phone.slice(0, 3) + '-' + this.phone.slice(4)
      };
      this.nuevoClientEmit.emit(this.nuevoCliente);
      this.panelForm = true;
      this.nombre = '';
      this.apellido = '';
      this.phone = '';
    }
  }



}
