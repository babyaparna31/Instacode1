import { NgModule } from '@angular/core';
                    import { SharedModule } from '../../shared/shared.module';
                    import { CustomersettingsRoutingModule } from './customersettings.routing';
                    import { CustomersettingsComponent } from './customersettings.component';

                    @NgModule({
                    imports: [
                        SharedModule,
                        CustomersettingsRoutingModule
                    ],
                    providers: [],
                    declarations: [CustomersettingsComponent]
                    })
                    export class CustomersettingsModule {}
                    