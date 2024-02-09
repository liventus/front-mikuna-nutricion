import { Routes } from '@angular/router';
import { TablaPacientesComponent } from './componentes/tabla-pacientes/tabla-pacientes.component';

export const routes: Routes = [
    { path: '**', pathMatch: 'full', redirectTo: 'tablas-pacientes'},
    { path: 'tablas-pacientes', component: TablaPacientesComponent },
];
