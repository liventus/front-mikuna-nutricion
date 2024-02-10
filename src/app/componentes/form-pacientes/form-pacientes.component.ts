import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { PacientesService } from '../../services/pacientes.service';
import { PacienteInterface } from '../../intefaces/paciente-interface';
import { Observable } from 'rxjs';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators,FormControl,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-pacientes',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, ReactiveFormsModule],
  templateUrl: './form-pacientes.component.html',
  styleUrl: './form-pacientes.component.css'
})
export class FormPacientesComponent {

  
  formPaciente: FormGroup;

  constructor(private pacientesService: PacientesService, private fb: FormBuilder,
    private firestore: Firestore, private router: Router) { 

      this.formPaciente = this.fb.group({
        name: ['', Validators.required],
        documentType: ['', Validators.required],
        nroDeDocument: ['', Validators.required],
        phone: ['', Validators.required],
        email: ['', Validators.required],
        address: ['', Validators.required],
        historiaClinica: ['']
      });

  }

  



  savePaciente(){

    if(this.formPaciente.valid){
      this.pacientesService.createdPaciente(this.formPaciente.value).then(()=>{
        console.log('Paciente creado');
        this.router.navigate(['/Lista-pacientes']);
      });
    }
  }

}
