import { NgModule } from '@angular/core';
                    import { RouterModule, Routes } from '@angular/router';
                    import { CustomercamspecsComponent } from './customercamspecs.component';

                    const routes: Routes = [
                    {
                        path: '',
                        component: CustomercamspecsComponent
                    }
                    ];

                    @NgModule({
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule]
                    })
                    export class CustomercamspecsRoutingModule { }
                    