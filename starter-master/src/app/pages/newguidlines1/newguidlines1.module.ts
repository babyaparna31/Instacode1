import { NgModule } from '@angular/core';
                    import { SharedModule } from '../../shared/shared.module';
                    import { Newguidlines1RoutingModule } from './newguidlines1.routing';
                    import { Newguidlines1Component } from './newguidlines1.component';

                    @NgModule({
                    imports: [
                        SharedModule,
                        Newguidlines1RoutingModule
                    ],
                    providers: [],
                    declarations: [Newguidlines1Component]
                    })
                    export class Newguidlines1Module {}
                    