import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { rutas } from '../../rutas/navegacion';
import { rutasgenericas } from '../../rutas/navgeneral';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';  
import { LoginComponent } from '../../componentes/login/login.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, RouterLinkActive, RouterOutlet, LoginComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router: Router) { }

  routes: any[] = rutasgenericas
  routesAdmin: any[] = rutas  


  
}
