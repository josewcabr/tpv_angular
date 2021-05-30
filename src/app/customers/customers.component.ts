import {Component, OnInit, ViewChild} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {ClientsService} from '../services/clients.service';
import {CompraService} from '../services/compra.service';
import {Client} from '../models/client';
import {PanelSelecClienteComponent} from './panel-selec-cliente/panel-selec-cliente.component';
import {PanelAddClienteComponent} from './panel-add-cliente/panel-add-cliente.component';
import {PanelErrorComponent} from './panel-error/panel-error.component';
import {Compra} from '../models/compra';
import {CompraRes} from '../models/compra-res';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit{

  // Lista de todos los clientes
  listaClientes: Client[];

  // clientes filtrados
  filteredClientes: Client[];

  // Panel de seleccion
  @ViewChild('componentPanelSeleccion')
  componentPanelSeleccion: PanelSelecClienteComponent;

  selectedClient: Client;

  @ViewChild('componentAddCliente')
  componentAddCliente: PanelAddClienteComponent;

  @ViewChild('componentError')
  componentError: PanelErrorComponent;

  panelError: boolean;

  comprasAll: CompraRes[];

  filteredCompras: CompraRes[];


  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'ver_registrar', cols: 2, rows: 1 },
          { title: 'estadisticas', cols: 3, rows: 4 },
        ];
      }

      return [
        { title: 'ver_registrar', cols: 2, rows: 1 },
        { title: 'estadisticas', cols: 3, rows: 4 },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver,
              private clientsService: ClientsService,
              private compraService: CompraService)  {}

  ngOnInit(): void {
    this.clientsService.getProduct().subscribe(
      res => {
        this.listaClientes = res;
      }
      ,
      err => console.error(err)
    );
    this.panelError = true;

    this.compraService.getCompra().subscribe(
      res => {
        this.comprasAll = res;
      }
      ,
      err => console.error(err)
    );
  }

  // Guarda los clientes que coincidan con la pista de busqueda

  procesarSeleccionCliente(value): void{
    this.filteredClientes = this.listaClientes.filter(e => e.name.toLowerCase().includes(value));

    if (this.filteredClientes.length > 0){
      this.componentPanelSeleccion.panelSeleccion = false;
    }
    console.log(value);
    console.log(this.filteredClientes);
  }

  // Guarda el cliente final seleccionado y muestra su actividad

  procesarCliente(client: Client): void{
    this.selectedClient = client;
    console.log(this.comprasAll, client.id);
    this.filteredCompras = this.comprasAll.filter(c => c.cliente.id === client.id);
    console.log(this.filteredCompras);
    this.componentPanelSeleccion.panelSeleccion = true;

  }

  // Activa el formulario de nuevo registro de cliente

  mostrarFormNuevoCliente(): void{
    this.componentAddCliente.panelForm = false;
    console.log('mostrar panel form cliente nuevo');
  }

  // Comprueba si el telefono del cliente a registrar no esta repetido, si no lo esta lo registra con POST

  addNuevoCliente(cliente: Client): void{
    let existe = false;
    if (this.listaClientes.find(c => c.phone === cliente.phone)){
      existe = true;
    }

    if (existe){
      this.componentError.titulo = 'Error';
      this.componentError.mensaje = 'El número de telefono ya existe';
      this.panelError = false;

    }
    else{
      this.clientsService
        .postClient(cliente)
        .subscribe();
      console.log(cliente);
    }

  }

  // Gestion del boton de cerrar mensaje de error

  procesarCerrarError(): void{
    this.panelError = true;
    this.componentError.titulo = '';
    this.componentError.mensaje = '';
  }


}
