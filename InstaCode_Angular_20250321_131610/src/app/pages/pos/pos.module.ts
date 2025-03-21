import { NgModule } from '@angular/core';
                    import { SharedModule } from '../../shared/shared.module';
                    import { PosRoutingModule } from './pos.routing';
                    import { PosComponent } from './pos.component';

                    @NgModule({
                    imports: [
                        SharedModule,
                        PosRoutingModule,
                        PosComponent
                    ],
                    providers: [],
                    })
                    export class PosModule {}
                    