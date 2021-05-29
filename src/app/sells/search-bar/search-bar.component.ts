import {Component, OnInit, EventEmitter, Output, Input, OnChanges} from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {Products} from '../../models/products';
import {Client} from '../../models/client';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit, OnChanges {

  @Output()
  pistaProductoEmit = new EventEmitter<string>();

  value = '';

  @Input()
  selectedClient: Client;

  valorBotonCliente: string;

  @Output()
  cancelOperationEmit = new EventEmitter<boolean>();

  @Output()
  seleccionClientEmit = new EventEmitter<boolean>();

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.valorBotonCliente = 'Seleccionar cliente';
  }

  cargarListaProd(): void{
    this.productsService.sendEvent();
  }

  inputContent(value): void {
    console.log(value);
  }

  buscarProducto(pista): void{
    if (pista !== ''){
      this.pistaProductoEmit.emit(pista);
      this.value = '';
    }
  }

  ngOnChanges(): void{
    if (this.selectedClient !== undefined){
      this.valorBotonCliente = this.selectedClient.name + ' ' + this.selectedClient.lastName[0] + '.';
    }
  }

  cancelarOperacion(): void{
    this.valorBotonCliente = 'Seleccionar cliente';
    this.cancelOperationEmit.emit(true);
  }

  seleccionCliente(): void {
    this.seleccionClientEmit.emit(true);
  }




}
