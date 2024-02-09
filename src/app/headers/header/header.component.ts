import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { rutas } from '../../rutas/navegacion';
import { rutasgenericas } from '../../rutas/navgeneral';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  routes: any[] = rutasgenericas

}
