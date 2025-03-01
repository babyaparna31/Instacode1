import { RouterOutlet} from '@angular/router';
            import {Component } from '@angular/core';
            import { BrowserModule } from '@angular/platform-browser';
            import { CustomerComponent } from './components/Customer/Customer.component';
import { LoginpageComponent } from './components/Loginpage/Loginpage.component';

            @Component({
            selector: 'app-root',
            standalone: true,
            imports: [RouterOutlet, CustomerComponent, LoginpageComponent],
            template: '<router-outlet></router-outlet>'
            })

            export class AppComponent {
            title = 'Figma_to_Angular_20250301150059';
            }
            