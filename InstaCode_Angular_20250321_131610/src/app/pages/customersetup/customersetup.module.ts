import { NgModule } from '@angular/core';
                    import { SharedModule } from '../../shared/shared.module';
                    import { CustomersetupRoutingModule } from './customersetup.routing';
                    import { CustomersetupComponent } from './customersetup.component';

                    @NgModule({
                    imports: [
                        SharedModule,
                        CustomersetupRoutingModule,
                        CustomersetupComponent
                    ],
                    providers: [],
                    })
                    export class CustomersetupModule {}
                    