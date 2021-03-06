import {Component, Input, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {ProductsService} from '../services/products.service';
import {Products} from '../models/products';
import {Subscription} from 'rxjs';
import {SelectionlistComponent} from './selectionlist/selectionlist.component';
import {ListPanelComponent} from './list-panel/list-panel.component';
import {ProductoSeleccionado} from '../models/producto-seleccionado';
import { ChangeDetectorRef } from '@angular/core';
import {Client} from '../models/client';
import {ClientsService} from '../services/clients.service';
import {TotalPanelComponent} from './total-panel/total-panel.component';
import {ListaClientesComponent} from './lista-clientes/lista-clientes.component';
import {Compra} from '../models/compra';
import {CompraService} from '../services/compra.service';
import {SearchBarComponent} from './search-bar/search-bar.component';

@Component({
  selector: 'app-sells',
  templateUrl: './sells.component.html',
  styleUrls: ['./sells.component.css']
})
export class SellsComponent implements OnInit, AfterViewInit{
  // Lista de productos extraidos desde la API
  public products: Products[];

  // Lista de productos filtrados por busqueda
  public filteredProducts: Products[];

  clickEventSubscription: Subscription;

  // Mostrar panel de seleccion
  public panelSeleccion: boolean;

  // Compente de seleccion de productos
  @ViewChild('componentLista')
  componentLista: SelectionlistComponent;

  // Componente lista de compra seleccionada
  @ViewChild('componentCompra')
  componentCompra: ListPanelComponent;

  // Componente calculo total
  @ViewChild('componentListaClientes')
  componentListaClientes: ListaClientesComponent;

  @ViewChild('componentSearch')
  componentSearch: SearchBarComponent;

  // Producto seleccionado que llega desde el panel de selección
  productoSeleccionado: ProductoSeleccionado;

  // Lista de compra
  listaCompra: ProductoSeleccionado[];

  // suma precios
  sumaTotal: number;

  // Lista Clientes
  listaClientes: Client[];

  // Cliente seleccionado
  selectedClient: Client;

  // Objeto con datos de la compra
  objetoPago: Compra;


  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'search_panel', cols: 1, rows: 1 },
          { title: 'total_panel', cols: 1, rows: 1 },
          { title: 'list_panel', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'search_panel', cols: 4, rows: 1 },
        { title: 'total_panel', cols: 2, rows: 5 },
        { title: 'list_panel', cols: 4, rows: 4 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver,
              private productsService: ProductsService,
              private clientsService: ClientsService,
              private cdRef: ChangeDetectorRef,
              private compraService: CompraService) {}

  ngAfterViewInit(): void {
    let suma = 0;
    if (this.listaCompra[0] !== undefined) {

      for (let element of this.listaCompra) {
        console.log(element.cantidad, element.producto.price);
        suma += element.cantidad * element.producto.price;

      }

      this.sumaTotal = suma;
      this.cdRef.detectChanges();
    }
  }

  ngOnInit(): void {
    this.sumaTotal = 0;
    this.panelSeleccion = true;
    this.productsService.getProduct().subscribe(
      res => {
        this.products = res;
      }
      ,
      err => console.error(err));

    this.clientsService.getProduct().subscribe(
      res => {
        this.listaClientes = res;
      }
      ,
      err => console.error(err)
    );
  }

  procesarPistaBuscar(pista): void{
    this.filteredProducts = this.products.filter(prod => prod.name.toLowerCase().includes(pista));
    this.componentLista.ventanaSeleccion = false;
    this.panelSeleccion = false;
    // console.log(this.filteredProducts);
  }

  procesarProd(prod): void{
    this.productoSeleccionado = prod;
  }

  procesarListaCompra(productos: ProductoSeleccionado[]): void {
    this.listaCompra = productos;
    this.ngAfterViewInit();
  }

  asignaCliente(cliente: Client): void{
    this.selectedClient = cliente;
    console.log(this.selectedClient);
  }

  cancelarOperacion(): void{
    this.componentCompra.productosSeleccionados = [];
    this.sumaTotal = 0;
    this.listaCompra = [];
    this.componentSearch.valorBotonCliente = 'Seleccionar cliente';
    console.log('op. cancelada');
  }

  abrirPanelSeleccionClientes(): void{
    this.componentListaClientes.ventanaSeleccion = false;
  }

  realizarPago(): void{
    if (this.listaCompra.length > 0 && this.selectedClient !== undefined){
      for (let prod of this.listaCompra){
        this.objetoPago = {
          id_cliente : this.selectedClient.id,
          id_producto : prod.producto.id,
          ammount : prod.cantidad
        };
        this.compraService
          .postCompra(this.objetoPago)
          .subscribe();
        console.log(this.objetoPago);
      }
      this.cancelarOperacion();

    }else{
      console.log('No hay cliente seleccionado o el carrito esta vacio');
    }
  }

}
