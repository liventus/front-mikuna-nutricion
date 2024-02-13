import { Routes } from '@angular/router';
import { TablaPacientesComponent } from './componentes/tabla-pacientes/tabla-pacientes.component';
import { FormPacientesComponent } from './componentes/form-pacientes/form-pacientes.component'; 
import { HistoryComponent } from './componentes/history/history.component';
import { LoginComponent } from './componentes/login/login.component'; 

export const routes: Routes = [
    
    { path: 'Lista-pacientes', component: TablaPacientesComponent },
    { path: 'nuevo-paciente', component: FormPacientesComponent },
    { path: 'historias-Form', component:  HistoryComponent  }    ,
    { path: 'login', component:  LoginComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'Lista-pacientes'},
];  
