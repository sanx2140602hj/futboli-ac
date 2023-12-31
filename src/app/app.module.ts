import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//Rutas
import { app_routing } from './app.routes';
import { HomeComponent } from './components/home/home.component';
import { TablasComponent } from './components/tablas/tablas.component';
import { PonyComponent } from './components/categorias/pony/pony.component';
import { MiniponyComponent } from './components/categorias/minipony/minipony.component';
import { PrescolarComponent } from './components/categorias/prescolar/prescolar.component';
import { InfantilComponent } from './components/categorias/infantil/infantil.component';
import { Sub12Component } from './components/categorias/sub12/sub12.component';
import { Sub13Component } from './components/categorias/sub13/sub13.component';
import { Sub15Component } from './components/categorias/sub15/sub15.component';
import { Sub17Component } from './components/categorias/sub17/sub17.component';
import { BiberonesComponent } from './components/categorias/biberones/biberones.component';
import { LoginAdminComponent } from './components/Admin/login-admin/login-admin.component';
import { AdminHomeComponent } from './components/Admin/login-admin/admin-home/admin-home.component';
import { AdminTemporadasComponent } from './components/Admin/login-admin/admin-temporadas/admin-temporadas.component';
import { AdminCategoriasComponent } from './components/Admin/login-admin/admin-categorias/admin-categorias.component';
import { AdminRegistroEquipoComponent } from './components/Admin/login-admin/admin-registro-equipo/admin-registro-equipo.component';
import { AdminRegistroJugadorComponent } from './components/Admin/login-admin/admin-registro-jugador/admin-registro-jugador.component';
import { AdminEquiposComponent } from './components/Admin/login-admin/admin-equipos/admin-equipos.component';
import { AdminPartidosComponent } from './components/Admin/login-admin/admin-partidos/admin-partidos.component';
import { SidebarComponent } from './components/Admin/sidebar/sidebar.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TablasComponent,
    PonyComponent,
    MiniponyComponent,
    PrescolarComponent,
    InfantilComponent,
    Sub12Component,
    Sub13Component,
    Sub15Component,
    Sub17Component,
    BiberonesComponent,
    LoginAdminComponent,
    AdminHomeComponent,
    AdminTemporadasComponent,
    AdminCategoriasComponent,
    AdminRegistroEquipoComponent,
    AdminRegistroJugadorComponent,
    AdminEquiposComponent,
    AdminPartidosComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
