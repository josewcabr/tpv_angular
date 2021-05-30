import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-panel-error',
  templateUrl: './panel-error.component.html',
  styleUrls: ['./panel-error.component.css']
})
export class PanelErrorComponent implements OnInit {

  titulo: string;
  mensaje: string;


  @Output()
  cerrarErrorEmit = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    this.titulo = '';
    this.mensaje = '';
  }

  cerraError(): void{
    this.cerrarErrorEmit.emit(true);
  }

}
