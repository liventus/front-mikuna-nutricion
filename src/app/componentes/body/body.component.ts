import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { HeaderComponent } from '../../headers/header/header.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule,
     RouterLink,
     RouterLinkActive,
     RouterOutlet,
    HeaderComponent
     ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
