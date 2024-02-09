import { Injectable } from '@angular/core';
import { Firestore, collection,addDoc,collectionData } from '@angular/fire/firestore';
import { PacienteInterface } from '../intefaces/paciente-interface';
import{ Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  constructor(private firestore: Firestore ) { }


  getPacientes(): Observable<PacienteInterface[]>{

    const pacienteRef = collection(this.firestore, 'Clients');
    return collectionData(pacienteRef, {idField:'id'}) as Observable<PacienteInterface[]>;
    
  }                

}