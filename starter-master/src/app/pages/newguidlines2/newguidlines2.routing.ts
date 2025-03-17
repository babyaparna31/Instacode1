import { NgModule } from '@angular/core';
                    import { RouterModule, Routes } from '@angular/router';
                    import { Newguidlines2Component } from './newguidlines2.component';

                    const routes: Routes = [
                    {
                        path: '',
                        component: Newguidlines2Component
                    }
                    ];

                    @NgModule({
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule]
                    })
                    export class Newguidlines2RoutingModule { }
                    