import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { DataServiceService } from '../../services/data-service.service';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {

  data?: any;

  constructor( private dataPaciente : DataServiceService ) {


  }

  ngOnInit(): void {
    this.data = this.dataPaciente.selectedData;
  }


}
