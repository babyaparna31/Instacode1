import { NgModule } from '@angular/core';
                    import { SharedModule } from '../../shared/shared.module';
                    import { Newguidlines2RoutingModule } from './newguidlines2.routing';
                    import { Newguidlines2Component } from './newguidlines2.component';

                    @NgModule({
                    imports: [
                        SharedModule,
                        Newguidlines2RoutingModule
                    ],
                    providers: [],
                    declarations: [Newguidlines2Component]
                    })
                    export class Newguidlines2Module {}
                    