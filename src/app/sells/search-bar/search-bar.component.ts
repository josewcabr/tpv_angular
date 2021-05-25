import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {Products} from '../../models/products';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output()
  pistaProductoEmit = new EventEmitter<string>();

  value = '';

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
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


}
