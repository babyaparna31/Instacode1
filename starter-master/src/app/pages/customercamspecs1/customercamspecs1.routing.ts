import { NgModule } from '@angular/core';
                    import { RouterModule, Routes } from '@angular/router';
                    import { Customercamspecs1Component } from './customercamspecs1.component';

                    const routes: Routes = [
                    {
                        path: '',
                        component: Customercamspecs1Component
                    }
                    ];

                    @NgModule({
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule]
                    })
                    export class Customercamspecs1RoutingModule { }
                    