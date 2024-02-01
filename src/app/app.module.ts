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
import { AcercaComponent } from './components/acerca/acerca.component';
import { LoginAdminComponent } from './components/Admin/login-admin/login-admin.component';
import { AdminHomeComponent } from './components/Admin/login-admin/admin-home/admin-home.component';
import { AdminCategoriasComponent } from './components/Admin/login-admin/admin-categorias/admin-categorias.component';
import { AdminRegistroEquipoComponent } from './components/Admin/login-admin/admin-registro-equipo/admin-registro-equipo.component';
import { AdminRegistroJugadorComponent } from './components/Admin/login-admin/admin-jugadores/admin-registro-jugador/admin-registro-jugador.component';
import { AdminEquiposComponent } from './components/Admin/login-admin/admin-equipos/admin-equipos.component';
import { AdminPartidosComponent } from './components/Admin/login-admin/admin-partidos/admin-partidos.component';
import { AdminRecibosComponent } from './components/Admin/login-admin/admin-recibos/admin-recibos.component';
import { AdminRoldejuegoComponent } from './components/Admin/login-admin/admin-roldejuego/admin-roldejuego.component';
import { AdminTablaposicionComponent } from './components/Admin/login-admin/admin-tablaposicion/admin-tablaposicion.component';

import { SidebarComponent } from './components/Admin/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';


import { ModalNuevacategoriasComponent } from './components/Admin/login-admin/admin-categorias/modal-nuevacategorias/modal-nuevacategorias.component';
import { ModalEditarCategoriasComponent } from './components/Admin/login-admin/admin-categorias/modal-editar-categorias/modal-editar-categorias.component';
import { ModalEliminarCategoriasComponent } from './components/Admin/login-admin/admin-categorias/modal-eliminar-categorias/modal-eliminar-categorias.component';
import { ModalDescripcioncategoriasComponent } from './components/Admin/login-admin/admin-categorias/modal-descripcioncategorias/modal-descripcioncategorias.component'; // Asegúrate de importar FormsModule y ReactiveFormsModule
import { EquiposUtilsComponent } from './components/Admin/login-admin/admin-equipos/equipos-utils/equipos-utils.component';
import { ModalequiposRegistrarComponent } from './components/Admin/login-admin/admin-equipos/modalequipos-registrar/modalequipos-registrar.component';
import { ModalequiposEditarComponent } from './components/Admin/login-admin/admin-equipos/modalequipos-editar/modalequipos-editar.component';
import { ModalequiposEliminarComponent } from './components/Admin/login-admin/admin-equipos/modalequipos-eliminar/modalequipos-eliminar.component';
import { ModalutilsequiposRegistrodirectortecnicoComponent } from './components/Admin/login-admin/admin-equipos/equipos-utils/modalutilsequipos-registrodirectortecnico/modalutilsequipos-registrodirectortecnico.component';
import { ModalutilsequiposRegistrodelpresidenteComponent } from './components/Admin/login-admin/admin-equipos/equipos-utils/modalutilsequipos-registrodelpresidente/modalutilsequipos-registrodelpresidente.component';
import { ModalutilsequiposEditarComponent } from './components/Admin/login-admin/admin-equipos/equipos-utils/modalutilsequipos-editar/modalutilsequipos-editar.component';
import { ModalutilsequiposEliminarComponent } from './components/Admin/login-admin/admin-equipos/equipos-utils/modalutilsequipos-eliminar/modalutilsequipos-eliminar.component';
import { ContactoComponent } from './components/Admin/login-admin/admin-jugadores/admin-registro-jugador/contacto/contacto.component';
import { DatosFisicosComponent } from './components/Admin/login-admin/admin-jugadores/admin-registro-jugador/datos-fisicos/datos-fisicos.component';
import { DatosPersonalesComponent } from './components/Admin/login-admin/admin-jugadores/admin-registro-jugador/datos-personales/datos-personales.component';
import { EscolarComponent } from './components/Admin/login-admin/admin-jugadores/admin-registro-jugador/escolar/escolar.component';
import { IdentificacionComponent } from './components/Admin/login-admin/admin-jugadores/admin-registro-jugador/identificacion/identificacion.component';
import { TutorComponent } from './components/Admin/login-admin/admin-jugadores/admin-registro-jugador/tutor/tutor.component';
import { AdminJugadoresComponent } from './components/Admin/login-admin/admin-jugadores/admin-jugadores.component';



import { UtilsCardsjugadorComponent } from './components/Admin/login-admin/admin-jugadores/admin-registro-jugador/utils-cardsjugador/utils-cardsjugador.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UtilsRoldejuegoComponent } from './components/Admin/login-admin/admin-roldejuego/utils-roldejuego/utils-roldejuego.component';
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
    AdminCategoriasComponent,
    AdminRegistroEquipoComponent,
    AdminRegistroJugadorComponent,
    AdminEquiposComponent,
    AdminPartidosComponent,
    
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    AcercaComponent,
    AdminRecibosComponent,
    ModalNuevacategoriasComponent,
    ModalEditarCategoriasComponent,
    ModalEliminarCategoriasComponent,
    ModalDescripcioncategoriasComponent,
    EquiposUtilsComponent,
    ModalequiposRegistrarComponent,
    ModalequiposEditarComponent,
    ModalequiposEliminarComponent,
    ModalutilsequiposRegistrodirectortecnicoComponent,
    ModalutilsequiposRegistrodelpresidenteComponent,
    ModalutilsequiposEditarComponent,
    ModalutilsequiposEliminarComponent,
    AdminRoldejuegoComponent,
    AdminTablaposicionComponent,  
    ContactoComponent,
    DatosFisicosComponent,
    DatosPersonalesComponent,
    EscolarComponent,
    IdentificacionComponent,
    TutorComponent,
    AdminJugadoresComponent,
    UtilsCardsjugadorComponent,
    UtilsRoldejuegoComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule, // Agrega FormsModule aquí
    ReactiveFormsModule, // Agrega ReactiveFormsModule si lo necesitas
  
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
