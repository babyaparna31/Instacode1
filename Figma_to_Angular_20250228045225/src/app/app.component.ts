import { RouterOutlet} from '@angular/router';
            import {Component } from '@angular/core';
            import { BrowserModule } from '@angular/platform-browser';
            import { HomeComponent } from './components/Home/Home.component';
import { HrComponent } from './components/Hr/Hr.component';

            @Component({
            selector: 'app-root',
            standalone: true,
            imports: [RouterOutlet, HomeComponent, HrComponent],
            template: '<router-outlet></router-outlet>'
            })

            export class AppComponent {
            title = 'Figma_to_Angular_20250228045225';
            }
            