import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { rutas } from '../../rutas/navegacion';
import { rutasgenericas } from '../../rutas/navgeneral';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';  
import { LoginComponent } from '../../componentes/login/login.component';
import { AuthService } from '../../services/auth.service';  //importamos el servicio de autenticacion
import { Auth } from '@angular/fire/auth'; //importamos el modulo de autenticacion de firebase

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, RouterLinkActive, RouterOutlet, LoginComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  
  
  isLoggedIn = false;//this.authService.isUserLoggedIn();  cambia segun el usuario este lofgeado o no
  user: any;



  constructor(private router: Router, private auth: AuthService,private fauth: Auth ) { }

    routes: any[] = rutasgenericas //rutas para usuarios no loggeados
    routesAdmin: any[] = rutas  //rutas para usuarios loggeados


  ngOnInit(): void {

    this.fauth.onAuthStateChanged((user) => {
      this.user = user;}) //obtenemos el usuario actual

    const user =  this.auth.isUserLoggedIn();

    this.fauth.onAuthStateChanged(user => { //cada vez que cambie el estado de la autenticacion lo comprueba
      this.isLoggedIn = !!user;
    });
    
  }
  
   loginComponent() {

    if (this.isLoggedIn) {
      this.auth.logout(); //cierra la sesion del usuario
      this.router.navigate(['/home']); //redirige al usuario a la pagina de login
    } else {
      this.router.navigate(['/login']); //redirige al usuario a la pagina de login
    }

    this.isLoggedIn = !this.isLoggedIn;
  }
}
