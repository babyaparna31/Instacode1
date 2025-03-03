import { Routes } from '@angular/router';
            import { CustomerComponent } from './components/Customer/Customer.component';
import { CustomercamspecsComponent } from './components/Customercamspecs/CustomerCAMSpecs.component';
import { LoginpageComponent } from './components/Loginpage/Loginpage.component';

            export const routes: Routes = [
              { path: 'Customer', component: CustomerComponent },
  { path: 'CustomerCAMSpecs', component: CustomercamspecsComponent },
  { path: 'Loginpage', component: LoginpageComponent }
            ];
            