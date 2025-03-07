// Import the NgModule decorator from Angular core
import { NgModule } from '@angular/core';
// Import routing related classes - PreloadAllModules strategy for lazy loading, RouterModule for routing functionality, and Routes type definition
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// Import the LayoutComponent which will serve as the main layout container for the application
import { LayoutComponent } from './layout/layout.component';

// Define the application routes configuration as a constant that can be exported
export const routes: Routes = [
  {
    // Root path configuration
    path: '',
    // Specify LayoutComponent as the component to render for the root path
    component: LayoutComponent,
    // Define child routes that will be rendered inside the LayoutComponent's router-outlet
    children: [
      // Default route that lazy loads the HomeModule when the path is empty
      { path: '', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) },
      // Route for 'customer' path that lazy loads the CustomerModule
      { path: 'customer', loadChildren: () => import('./pages/customer/customer.module').then((m) => m.CustomerModule) },
      // Route for 'customercamspecs' path that lazy loads the CustomercamspecsModule
      { path: 'customercamspecs', loadChildren: () => import('./pages/customercamspecs/customercamspecs.module').then((m) => m.CustomercamspecsModule) },
      // Route for 'contact' path that lazy loads the ContactModule
      { path: 'contact', loadChildren: () => import('./contact/contact.module').then((m) => m.ContactModule) },
      // Route for 'settings' path that lazy loads the SettingsModule
      { path: 'settings', loadChildren: () => import('./settings/settings.module').then((m) => m.SettingsModule) }
    ]
  },
  
  // Wildcard route that redirects any unmatched routes to the root path
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

// NgModule decorator to define this as an Angular module
@NgModule({
  // Import and configure the RouterModule with the defined routes, using PreloadAllModules strategy and disabling hash-based routing
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: false })],
  // Export RouterModule so the components in the AppModule can use routing directives
  exports: [RouterModule]
})
// Define the AppRoutingModule class that will be imported in the main AppModule
export class AppRoutingModule {}