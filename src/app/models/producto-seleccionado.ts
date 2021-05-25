import {Products} from './products';

export class ProductoSeleccionado {
  cantidad: number;
  producto: Products;

  constructor(cantidad: number, producto: Products) {
    this.cantidad = cantidad;
    this.producto = producto;
  }

  public getCantidad(): number{
    return this.cantidad;
  }

  public getProducto(): Products{
    return this.producto;
  }

}
