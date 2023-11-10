import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TablasComponent } from './components/tablas/tablas.component';


const app_routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'tabla', component: TablasComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const app_routing = RouterModule.forRoot(app_routes);