import { RouterModule, Routes } from '@angular/router';
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
import { AdminRoldejuegoComponent } from './components/Admin/login-admin/admin-roldejuego/admin-roldejuego.component';
import { AdminTablaposicionComponent } from './components/Admin/login-admin/admin-tablaposicion/admin-tablaposicion.component';
import { AdminRegistroJugadorComponent } from './components/Admin/login-admin/admin-jugadores/admin-registro-jugador/admin-registro-jugador.component';
import { AdminEquiposComponent } from './components/Admin/login-admin/admin-equipos/admin-equipos.component';
import { AdminPartidosComponent } from './components/Admin/login-admin/admin-partidos/admin-partidos.component';
import { AdminRecibosComponent } from './components/Admin/login-admin/admin-recibos/admin-recibos.component';
import { AdminJugadoresComponent } from './components/Admin/login-admin/admin-jugadores/admin-jugadores.component';

/* utils */
import { EquiposUtilsComponent } from './components/Admin/login-admin/admin-equipos/equipos-utils/equipos-utils.component';
import { UtilsCardsjugadorComponent } from './components/Admin/login-admin/admin-jugadores/admin-registro-jugador/utils-cardsjugador/utils-cardsjugador.component';

/*  */
import { ContactoComponent } from './components/Admin/login-admin/admin-jugadores/admin-registro-jugador/contacto/contacto.component';
import { DatosFisicosComponent } from './components/Admin/login-admin/admin-jugadores/admin-registro-jugador/datos-fisicos/datos-fisicos.component';
import { DatosPersonalesComponent } from './components/Admin/login-admin/admin-jugadores/admin-registro-jugador/datos-personales/datos-personales.component';
import { EscolarComponent } from './components/Admin/login-admin/admin-jugadores/admin-registro-jugador/escolar/escolar.component';
import { IdentificacionComponent } from './components/Admin/login-admin/admin-jugadores/admin-registro-jugador/identificacion/identificacion.component';
import { TutorComponent } from './components/Admin/login-admin/admin-jugadores/admin-registro-jugador/tutor/tutor.component';
import { UtilsRoldejuegoComponent } from './components/Admin/login-admin/admin-roldejuego/utils-roldejuego/utils-roldejuego.component';


const app_routes: Routes = [
  { path: 'Inicio', component: HomeComponent },
  { path: 'Tablas-de-posiciones', component: TablasComponent },
  { path: 'Categoria-Pony', component: PonyComponent },
  { path: 'Categoria-Minipony', component: MiniponyComponent },
  { path: 'Categoria-Biberones', component: BiberonesComponent },
  { path: 'Categoria-Prescolar', component: PrescolarComponent },
  { path: 'Categoria-Infantil', component: InfantilComponent },
  { path: 'Categoria-Sub-12', component: Sub12Component },
  { path: 'Categoria-Sub-13', component: Sub13Component },
  { path: 'Categoria-Sub-15', component: Sub15Component },
  { path: 'Categoria-Sub-17', component: Sub17Component },
  { path: 'Acerca', component:AcercaComponent},

  /* Admin */
  
  { path: 'Admin', component: LoginAdminComponent },
  { path: 'Admin-Home', component: AdminHomeComponent },
  { path: 'Admin-Categorias', component: AdminCategoriasComponent },
  { path: 'Admin-Jugadores', component:AdminJugadoresComponent},
  { path: 'Admin-RegistroEquipo', component: AdminRegistroEquipoComponent },
  { path: 'Admin-RegistroJugador', component: AdminRegistroJugadorComponent },
  { path: 'Admin-Equipos', component: AdminEquiposComponent },
  { path: 'Admin-Partidos', component: AdminPartidosComponent },
  { path: 'Admin-Recibos', component: AdminRecibosComponent},
  { path: 'Admin-RolesdeJuegos', component:AdminRoldejuegoComponent},
  { path: 'Admin-TablaPosicion', component:AdminTablaposicionComponent},

  /* utils-admin */
  { path: 'equipos', component:EquiposUtilsComponent},
  { path: 'Contacto', component: ContactoComponent},
  { path: 'Datos-Fisicos', component: DatosFisicosComponent},
  { path: 'Datos-Personales', component: DatosPersonalesComponent},
  { path: 'Escolar', component: EscolarComponent},
  { path: 'Identificacion', component: IdentificacionComponent},
  { path: 'Tutor', component: TutorComponent},
  { path: 'card-jugador', component: UtilsCardsjugadorComponent},
  { path: 'Rol-de-Juego', component: UtilsRoldejuegoComponent},

  

  { path: '**', pathMatch: 'full', redirectTo: 'Inicio' }



];
export const app_routing = RouterModule.forRoot(app_routes);
/* export const app_routing = RouterModule.forRoot(app_routes, { scrollPositionRestoration: 'top' }); 
⚠️⚠️⚠️⚠️Poner esta linea de codigo al terminar el proyecto⚠️⚠️⚠️⚠️
*/