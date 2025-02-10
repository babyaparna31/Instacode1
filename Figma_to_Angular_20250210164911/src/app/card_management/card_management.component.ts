import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card_management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card_management.component.html',
  styleUrls: ['./card_management.component.scss']
})
export class CardManagementComponent {

  constructor(private router: Router) {}

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}