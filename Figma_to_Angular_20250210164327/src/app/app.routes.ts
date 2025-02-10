// app.routes.ts
import { Routes } from '@angular/router';
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

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'list', component: ListComponent },
  { path: 'add_user', component: AdduserComponent },
  { path: 'update_user', component: UpdateUserComponent },
  { path: 'delete_user', component: DeleteUserComponent },
  { path: "frame3",component:UserFormComponent},
  { path: "account_management",component:AccountManagementComponent},
  { path: "card_management",component:CardManagementComponent},
  { path: "transaction",component:TransactionComponent},
  { path: "bill_pay",component:BillPayComponent},
  { path: "report",component:ReportComponent},
  { path: "frame2",component:UserForm1Component},

  
  

];