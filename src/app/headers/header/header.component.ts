import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { rutas } from '../../rutas/navegacion';
import { rutasgenericas } from '../../rutas/navgeneral';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  routes: any[] = rutasgenericas
  routesAdmin: any[] = rutas  

}
