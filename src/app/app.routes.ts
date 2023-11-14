import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TablasComponent } from './components/tablas/tablas.component';
import { BiberonesComponent } from './components/categorias/biberones/biberones.component';
import { PonyComponent } from './components/categorias/pony/pony.component';
import { MiniponyComponent } from './components/categorias/minipony/minipony.component';
import { PrescolarComponent } from './components/categorias/prescolar/prescolar.component';
import { InfantilComponent } from './components/categorias/infantil/infantil.component';
import { Sub12Component } from './components/categorias/sub12/sub12.component';
import { Sub13Component } from './components/categorias/sub13/sub13.component';
import { Sub15Component } from './components/categorias/sub15/sub15.component';
import { Sub17Component } from './components/categorias/sub17/sub17.component';
import { LoginAdminComponent } from './components/Admin/login-admin/login-admin.component';
import { AdminHomeComponent } from './components/Admin/login-admin/admin-home/admin-home.component';
import { ComponentsAdminComponent } from './components/Admin/components-admin/components-admin.component';



const app_routes: Routes = [
  { path: 'Inicio', component: HomeComponent },
  { path: 'Tablas-de-posiciones', component: TablasComponent },
  { path: 'Categoria-Pony', component: PonyComponent },
  { path: 'Categoria-Minipony', component: MiniponyComponent },
  { path: 'Categoria-Biberones', component: BiberonesComponent},
  { path: 'Categoria-Prescolar', component: PrescolarComponent },
  { path: 'Categoria-Infantil', component: InfantilComponent },
  { path: 'Categoria-Sub-12', component: Sub12Component },
  { path: 'Categoria-Sub-13', component: Sub13Component },
  { path: 'Categoria-Sub-15', component: Sub15Component },
  { path: 'Categoria-Sub-17', component: Sub17Component },
  { path: '**', pathMatch: 'full', redirectTo: 'Inicio' }
];

export const app_routing = RouterModule.forRoot(app_routes);
