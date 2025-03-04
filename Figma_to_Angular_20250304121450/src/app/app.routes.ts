import { Routes } from '@angular/router';
            import { CustomerComponent } from './components/Customer/Customer.component';
import { CustomercamspecsComponent } from './components/Customercamspecs/Customercamspecs.component';
import { LoginpageComponent } from './components/Loginpage/Loginpage.component';

            export const routes: Routes = [
              { path: '', redirectTo: '/Loginpage', pathMatch: 'full' },
  { path: 'Customer', component: CustomerComponent },
  { path: 'Customercamspecs', component: CustomercamspecsComponent },
  { path: 'Loginpage', component: LoginpageComponent }
            ];
            