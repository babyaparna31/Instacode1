import { Routes } from '@angular/router';
                import { HomeComponent } from './components/Home/Home.component';
import { HrComponent } from './components/Hr/Hr.component';

                export const routes: Routes = [
                  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Hr', component: HrComponent }
                ];
                