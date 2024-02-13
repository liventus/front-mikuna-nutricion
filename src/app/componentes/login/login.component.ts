import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormBuilder ,FormGroup, Validator , ReactiveFormsModule  } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { EventEmitter ,Output} from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  @Output() loginSuccess = new EventEmitter<void>();

  loginForm : FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { 

    this.loginForm  = this.fb.group({
      email: [''],
      password: ['']
  });


  }

   

  onSubmit() {
    this.authService.login(this.loginForm.value).then((res) => {
      console.log('Logged in'); 
      this.router.navigate(['/']); // Redirigimos al usuario a la página principal  
      this.loginSuccess.emit();  // Emitimos el evento de login exitoso
    }).catch((err) => {
      console.log('Error logging in');
    });
  }

  googleLogin() {
    console.log('Google login');
  }


  onClickRegistroGmail(){

    this.authService.googleLogin().then(() => {
      this.router.navigate(['/']);
    }).catch(() => {
      alert('Error al iniciar sesión con Google');  
      });
    } 
    


  logout() {
    console.log('Logout');
  }

  ngOnInit() {
  } 

}
