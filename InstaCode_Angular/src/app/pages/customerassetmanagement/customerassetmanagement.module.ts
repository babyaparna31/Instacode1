import { NgModule } from '@angular/core';
                    import { SharedModule } from '../../shared/shared.module';
                    import { CustomerassetmanagementRoutingModule } from './customerassetmanagement.routing';
                    import { CustomerassetmanagementComponent } from './customerassetmanagement.component';

                    @NgModule({
                    imports: [
                        SharedModule,
                        CustomerassetmanagementRoutingModule
                    ],
                    providers: [],
                    declarations: [CustomerassetmanagementComponent]
                    })
                    export class CustomerassetmanagementModule {}
                    