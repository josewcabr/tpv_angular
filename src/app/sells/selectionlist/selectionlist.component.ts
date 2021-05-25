import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ProductsService} from '../../services/products.service';
import {Products} from '../../models/products';
import {MatDialog} from '@angular/material/dialog';
import {ProductoSeleccionado} from '../../models/producto-seleccionado';


@Component({
  selector: 'app-selectionlist',
  templateUrl: './selectionlist.component.html',
  styleUrls: ['./selectionlist.component.css']
})
export class SelectionlistComponent implements OnInit {

  @Input() products: Products[];
  public selectedProd: Products;
  public cantidad: any;

  public prodSeleccionado: ProductoSeleccionado;
  ventanaSeleccion: boolean;
  ventanaCantidad: boolean;

  constructor(public dialog: MatDialog) {
    this.cantidad = 0;
    // this.ventanaSeleccion = false;
    this.ventanaCantidad = true;
  }

  ngOnInit(): void {

  }

  clickeado(event): void {
    this.ventanaSeleccion = true;
    this.ventanaCantidad = false;
    this.selectedProd = event;
    this.cantidad = 1;
  }

  asignarCantidadProd(value: string): void{
    this.cantidad = parseInt(value, 10);
    this.ventanaCantidad = true;

    this.prodSeleccionado.cantidad = this.cantidad;
    this.prodSeleccionado.producto = this.selectedProd;

    console.log(this.cantidad, this.selectedProd);
  }






}




