import { NgModule } from '@angular/core';
                    import { SharedModule } from '../../shared/shared.module';
                    import { Customercamspecs1RoutingModule } from './customercamspecs1.routing';
                    import { Customercamspecs1Component } from './customercamspecs1.component';

                    @NgModule({
                    imports: [
                        SharedModule,
                        Customercamspecs1RoutingModule
                    ],
                    providers: [],
                    declarations: [Customercamspecs1Component]
                    })
                    export class Customercamspecs1Module {}
                    