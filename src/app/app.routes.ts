import { Routes } from '@angular/router';
import { TablaPacientesComponent } from './componentes/tabla-pacientes/tabla-pacientes.component';
import { FormPacientesComponent } from './componentes/form-pacientes/form-pacientes.component'; 
import { HistoryComponent } from './componentes/history/history.component';


export const routes: Routes = [
    { path: '**', pathMatch: 'full', redirectTo: 'Lista-pacientes'},
    { path: 'Lista-pacientes', component: TablaPacientesComponent },
    { path: 'nuevo-paciente', component: FormPacientesComponent },
    { path: 'historias-Form', component:  HistoryComponent  }    
];
