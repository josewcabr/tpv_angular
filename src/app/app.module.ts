import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { NavTPVComponent } from './nav-tpv/nav-tpv.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { SellsComponent } from './sells/sells.component';
import { CustomersComponent } from './customers/customers.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { TaxesComponent } from './taxes/taxes.component';
import { SearchBarComponent } from './sells/search-bar/search-bar.component';
import { ListPanelComponent } from './sells/list-panel/list-panel.component';
import { TotalPanelComponent } from './sells/total-panel/total-panel.component';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {HttpClientModule} from '@angular/common/http';
import {ProductsService} from './services/products.service';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { SelectionlistComponent } from './sells/selectionlist/selectionlist.component';
import { ListaClientesComponent } from './sells/lista-clientes/lista-clientes.component';
import { PanelVerAgregarComponent } from './customers/panel-ver-agregar/panel-ver-agregar.component';
import { PanelEstadisticasComponent } from './customers/panel-estadisticas/panel-estadisticas.component';
import { PanelSelecClienteComponent } from './customers/panel-selec-cliente/panel-selec-cliente.component';
import { PanelAddClienteComponent } from './customers/panel-add-cliente/panel-add-cliente.component';
import { PanelErrorComponent } from './customers/panel-error/panel-error.component';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    AppComponent,
    NavTPVComponent,
    SellsComponent,
    CustomersComponent,
    StatisticsComponent,
    TaxesComponent,
    SearchBarComponent,
    ListPanelComponent,
    TotalPanelComponent,
    SelectionlistComponent,
    ListaClientesComponent,
    PanelVerAgregarComponent,
    PanelEstadisticasComponent,
    PanelSelecClienteComponent,
    PanelAddClienteComponent,
    PanelErrorComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatDialogModule,
    MatTableModule,
    ChartsModule
  ],
  providers: [ProductsService],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
