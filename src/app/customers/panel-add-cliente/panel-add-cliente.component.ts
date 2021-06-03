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
      const lastNameArr = this.apellido.split(' ');

      if (lastNameArr.length === 2){
        this.nuevoCliente = {
          name : this.nombre.charAt(0).toUpperCase() + this.nombre.slice(1),
          lastName : this.apellido.split(' ')[0].charAt(0).toUpperCase()
            + this.apellido.split(' ')[0].slice(1) + ' '
            + this.apellido.split(' ')[1].charAt(0).toUpperCase()
            + this.apellido.split(' ')[1].slice(1),
          phone: this.phone.slice(0, 3) + '-' + this.phone.slice(4)
        };
      }
      else{
        this.nuevoCliente = {
          name : this.nombre.charAt(0).toUpperCase() + this.nombre.slice(1),
          lastName : this.apellido.charAt(0).toUpperCase() + this.apellido.slice(1),
          phone: this.phone.slice(0, 3) + '-' + this.phone.slice(4)
        };
      }

      this.nuevoClientEmit.emit(this.nuevoCliente);
      this.panelForm = true;
      console.log(this.panelForm);
      this.nombre = '';
      this.apellido = '';
      this.phone = '';
    }
  }



}
