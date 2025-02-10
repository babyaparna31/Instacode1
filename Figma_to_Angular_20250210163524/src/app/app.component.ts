import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { AdduserComponent } from './add_user/add_user.component';
import { UpdateUserComponent } from './update_user/update_user.component';
import { DeleteUserComponent } from './delete_user/delete_user.component';
import { UserFormComponent } from './frame3/frame3.component';
import { AccountManagementComponent } from './account_management/account_management.component';
import { CardManagementComponent } from "./card_management/card_management.component";
import { TransactionComponent } from "./transaction/transaction.component";
import { BillPayComponent } from "./bill_pay/bill_pay.component";
import { ReportComponent } from "./report/report.component";
import { UserForm1Component } from './frame2/frame2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, ListComponent,AdduserComponent,UpdateUserComponent,DeleteUserComponent,UserFormComponent,AccountManagementComponent,CardManagementComponent,TransactionComponent,BillPayComponent,ReportComponent,UserForm1Component],
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'Login Application';
}