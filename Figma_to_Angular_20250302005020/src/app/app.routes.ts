import { Routes } from '@angular/router';
                import { CustomerComponent } from './components/Customer/Customer.component';
import { LoginpageComponent } from './components/Loginpage/Loginpage.component';

                export const routes: Routes = [
                  { path: '', redirectTo: '/Customer', pathMatch: 'full' },
  { path: 'Customer', component: CustomerComponent },
  { path: 'Loginpage', component: LoginpageComponent }
                ];
                