import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-account_management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account_management.component.html',
  styleUrls: ['./account_management.component.scss']
})
export class AccountManagementComponent {

  constructor(private router: Router) {}

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}