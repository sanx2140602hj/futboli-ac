import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { CardsUtilsComponent } from './components/cards-utils/cards-utils.component';
import { TablasComponent } from './components/tablas/tablas.component';
import { Sub12Component } from './components/cards-utils/sub12/sub12.component';
import { AcercaComponent } from './components/acerca/acerca.component';

import { LoginAdminComponent } from './components/Admin/login-admin/login-admin.component';
import { AdminHomeComponent } from './components/Admin/login-admin/admin-home/admin-home.component';
import { AdminCategoriasComponent } from './components/Admin/login-admin/admin-categorias/admin-categorias.component';
import { AdminRoldejuegoComponent } from './components/Admin/login-admin/admin-roldejuego/admin-roldejuego.component';
import { AdminTablaposicionComponent } from './components/Admin/login-admin/admin-tablaposicion/admin-tablaposicion.component';
import { AdminRegistroJugadorComponent } from './components/Admin/login-admin/admin-jugadores/admin-registro-jugador/admin-registro-jugador.component';
import { AdminEquiposComponent } from './components/Admin/login-admin/admin-equipos/admin-equipos.component';
import { AdminPartidosComponent } from './components/Admin/login-admin/admin-partidos/admin-partidos.component';
import { AdminRecibosComponent } from './components/Admin/login-admin/admin-recibos/admin-recibos.component';
import { AdminJugadoresComponent } from './components/Admin/login-admin/admin-jugadores/admin-jugadores.component';
import { PartidosUtilsComponent } from './components/Admin/login-admin/admin-partidos/partidos-utils/partidos-utils.component';

/* utils */
import { EquiposUtilsComponent } from './components/Admin/login-admin/admin-equipos/equipos-utils/equipos-utils.component';
import { UtilsCardsjugadorComponent } from './components/Admin/login-admin/admin-jugadores/utils-cardsjugador/utils-cardsjugador.component';

/*  */
import { UtilsRoldejuegoComponent } from './components/Admin/login-admin/admin-roldejuego/utils-roldejuego/utils-roldejuego.component';
import { TablasUtilsComponent } from './components/tablas/tablas-utils/tablas-utils.component';
import { ModalNuevacategoriasComponent } from './components/Admin/login-admin/admin-categorias/modal-nuevacategorias/modal-nuevacategorias.component';

import { AuthGuard } from './auth.guard';

const app_routes: Routes = [
  { path: 'Inicio', component: HomeComponent },
  { path: 'Tablas-de-posiciones', component: TablasComponent },
  { path: 'Todas-las-categorias', component: CardsUtilsComponent },
  { path: 'Utils-Categoria', component: Sub12Component },
  { path: 'Acerca', component:AcercaComponent},

  /* Admin */
  
  { path: 'Admin', component: LoginAdminComponent },
  { path: 'Admin-Home', component: AdminHomeComponent , canActivate: [AuthGuard] },
  { path: 'Admin-Categorias', component: AdminCategoriasComponent , canActivate: [AuthGuard] },
  { path: 'Admin-Jugadores', component:AdminJugadoresComponent , canActivate: [AuthGuard] },
  { path: 'Admin-RegistroJugador', component: AdminRegistroJugadorComponent  , canActivate: [AuthGuard] },
  { path: 'Admin-Equipos', component: AdminEquiposComponent  , canActivate: [AuthGuard] },
  { path: 'Admin-Partidos', component: AdminPartidosComponent  , canActivate: [AuthGuard] },
  { path: 'Admin-Recibos', component: AdminRecibosComponent , canActivate: [AuthGuard] },
  { path: 'Admin-RolesdeJuegos', component:AdminRoldejuegoComponent , canActivate: [AuthGuard] },
  { path: 'Admin-TablaPosicion', component:AdminTablaposicionComponent , canActivate: [AuthGuard] },


  /* utils-admin */
  { path: 'equipos', component:EquiposUtilsComponent},
  { path: 'card-jugador', component: UtilsCardsjugadorComponent},
  { path: 'Rol-de-Juego', component: UtilsRoldejuegoComponent},
  { path: 'partidos-admin', component: PartidosUtilsComponent},
  { path: 'tablas-utils', component: TablasUtilsComponent},

  

  { path: '**', pathMatch: 'full', redirectTo: 'Inicio' }



];
export const app_routing = RouterModule.forRoot(app_routes, { scrollPositionRestoration: 'top' }); 
/* 
export const app_routing = RouterModule.forRoot(app_routes);
⚠️⚠️⚠️⚠️Poner esta linea de codigo al terminar el proyecto⚠️⚠️⚠️⚠️
*/