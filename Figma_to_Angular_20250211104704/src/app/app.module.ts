import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdduserComponent } from './add_user/add_user.component';
import { ListComponent } from './list/list.component';
import { UpdateUserComponent } from './update_user/update_user.component';
import { DeleteUserComponent } from './delete_user/delete_user.component';
import { UserFormComponent } from './frame3/frame3.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BillPayComponent } from './bill_pay/bill_pay.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdduserComponent,
    ListComponent,
    UpdateUserComponent,
    DeleteUserComponent,
    UserFormComponent,
    BillPayComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
