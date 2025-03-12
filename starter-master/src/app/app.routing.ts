import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [

                { path: '', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) },
                  { path: 'customer', loadChildren: () => import('./pages/customer/customer.module').then((m) => m.CustomerModule) },
      { path: 'customercamspecs1', loadChildren: () => import('./pages/customercamspecs1/customercamspecs1.module').then((m) => m.Customercamspecs1Module) },
      { path: 'customersettings', loadChildren: () => import('./pages/customersettings/customersettings.module').then((m) => m.CustomersettingsModule) },
      { path: 'contact', loadChildren: () => import('./contact/contact.module').then((m) => m.ContactModule) },
      { path: 'settings', loadChildren: () => import('./settings/settings.module').then((m) => m.SettingsModule) }
    
    
    

    ]
  },

  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
