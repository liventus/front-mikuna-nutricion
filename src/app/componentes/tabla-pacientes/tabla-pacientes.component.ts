import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacientesService } from '../../services/pacientes.service';
import { PacienteInterface } from '../../intefaces/paciente-interface';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router'; 
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { DataServiceService } from '../../services/data-service.service';

@Component({
  selector: 'app-tabla-pacientes',
  standalone: true,
  imports: [CommonModule  , RouterLink, RouterLinkActive, RouterOutlet, RouterModule],
  templateUrl: './tabla-pacientes.component.html',
  styleUrl: './tabla-pacientes.component.css'
})
export class TablaPacientesComponent {

  dataSource: PacienteInterface[] = [];

  constructor(private pacienteService : PacientesService, private router: Router ,
    private dataService: DataServiceService) { 
    
  }

  ngOnInit(): void {
    this.pacienteService.getPacientes().subscribe(pacientes => {
      console.log(pacientes);
      this.dataSource = pacientes;
    });
  }

  historiaClinica(data: PacienteInterface){
    this.dataService.selectedData = data;
    this.router.navigate(['historias-Form']);

  }

  sendEmail(){
    console.log('send email');
    alert('send email');
  }

  senMessage(){
    console.log('send message');
    alert('send message');
  }

  nuevoRegistroDePacientes(){
    this.router.navigate(['nuevo-paciente']);
  }
}
