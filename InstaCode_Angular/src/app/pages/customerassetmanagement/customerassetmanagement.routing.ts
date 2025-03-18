import { NgModule } from '@angular/core';
                    import { RouterModule, Routes } from '@angular/router';
                    import { CustomerassetmanagementComponent } from './customerassetmanagement.component';

                    const routes: Routes = [
                    {
                        path: '',
                        component: CustomerassetmanagementComponent
                    }
                    ];

                    @NgModule({
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule]
                    })
                    export class CustomerassetmanagementRoutingModule { }
                    