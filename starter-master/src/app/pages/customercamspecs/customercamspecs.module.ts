import { NgModule } from '@angular/core';
                    import { SharedModule } from '../../shared/shared.module';
                    import { CustomercamspecsRoutingModule } from './customercamspecs.routing';
                    import { CustomercamspecsComponent } from './customercamspecs.component';

                    @NgModule({
                    imports: [
                        SharedModule,
                        CustomercamspecsRoutingModule
                    ],
                    providers: [],
                    declarations: [CustomercamspecsComponent]
                    })
                    export class CustomercamspecsModule {}
                    