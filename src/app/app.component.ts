import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './headers/header/header.component';
import { TablaHistoriasComponent } from './componentes/tabla-historias/tabla-historias.component';
import { FooterComponent} from './footers/footer/footer.component';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { HistoryComponent } from './componentes/history/history.component';
import { BodyComponent } from './componentes/body/body.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,
    HeaderComponent,
    BodyComponent,
    TablaHistoriasComponent, 
    FooterComponent,
    RouterLink,
    RouterLinkActive,
    HistoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front-mikuna-nutricion';
}
