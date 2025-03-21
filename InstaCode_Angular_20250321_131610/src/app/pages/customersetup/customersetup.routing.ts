import { NgModule } from '@angular/core';
                    import { RouterModule, Routes } from '@angular/router';
                    import { CustomersetupComponent } from './customersetup.component';

                    const routes: Routes = [
                    {
                        path: '',
                        component: CustomersetupComponent
                    }
                    ];

                    @NgModule({
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule]
                    })
                    export class CustomersetupRoutingModule { }
                    