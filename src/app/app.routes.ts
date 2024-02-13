import { Routes } from '@angular/router';
import { TablaPacientesComponent } from './componentes/tabla-pacientes/tabla-pacientes.component';
import { FormPacientesComponent } from './componentes/form-pacientes/form-pacientes.component'; 
import { HistoryComponent } from './componentes/history/history.component';
import { LoginComponent } from './componentes/login/login.component'; 
import { BodyComponent } from './componentes/body/body.component';
import { redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { canActivate } from '@angular/fire/auth-guard'; 

export const routes: Routes = [
    
    { path: 'Lista-pacientes', component: TablaPacientesComponent, ...canActivate(()=> redirectUnauthorizedTo(['login'])) },
    { path: 'nuevo-paciente', component: FormPacientesComponent , ...canActivate(()=> redirectUnauthorizedTo(['login'])) },
    { path: 'historias-Form', component:  HistoryComponent  , ...canActivate(()=> redirectUnauthorizedTo(['login']))}    ,
    { path: 'login', component:  LoginComponent},
    { path: 'home', component : BodyComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'},
];  
