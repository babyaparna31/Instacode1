import { RouterOutlet} from '@angular/router';
import {Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AllfigmaelementComponent } from './components/Allfigmaelement/Allfigmaelement.component';
import { ContainersComponent } from './components/Containers/containers.component';
import { HomeComponent } from './components/Home/Home.component';
import { HrComponent } from './components/Hr/hr.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AllfigmaelementComponent, ContainersComponent, HomeComponent, HrComponent],
  templateUrl: './app.component.html'
})

export class AppComponent {
  title = 'Figma_to_Angular_20250221171409';
}
