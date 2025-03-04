import { RouterOutlet} from '@angular/router';
            import {Component } from '@angular/core';
            import { BrowserModule } from '@angular/platform-browser';
            

            @Component({
            selector: 'app-root',
            standalone: true,
            imports: [RouterOutlet],
            template: '<router-outlet></router-outlet>'
            })

            export class AppComponent {
            title = 'Figma_to_Angular_20250304092306';
            }
            