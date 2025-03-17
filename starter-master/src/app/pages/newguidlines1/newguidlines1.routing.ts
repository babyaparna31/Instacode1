import { NgModule } from '@angular/core';
                    import { RouterModule, Routes } from '@angular/router';
                    import { Newguidlines1Component } from './newguidlines1.component';

                    const routes: Routes = [
                    {
                        path: '',
                        component: Newguidlines1Component
                    }
                    ];

                    @NgModule({
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule]
                    })
                    export class Newguidlines1RoutingModule { }
                    