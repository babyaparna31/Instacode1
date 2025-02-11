import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update_user.component.html',
  styleUrls: ['./update_user.component.scss']
})
export class UpdateUserComponent {
  constructor(private router: Router) {}

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}