// Import the Routes type from Angular's router module
import { Routes } from '@angular/router';

// Import the HomeComponent from its file location
import { HomeComponent } from './components/Home/Home.component';

// Import the HrComponent from its file location
import { HrComponent } from './components/Hr/Hr.component';

// Define and export the routes array of type Routes
export const routes: Routes = [
  // Define a route for the root path that redirects to '/Home'
  { path: '', redirectTo: '/Home', pathMatch: 'full' },

  // Define a route for the 'Home' path that uses the HomeComponent
  { path: 'Home', component: HomeComponent },

  // Define a route for the 'Hr' path that uses the HrComponent
  { path: 'Hr', component: HrComponent }
];