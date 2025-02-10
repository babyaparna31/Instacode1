import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-delete_user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete_user.component.html',
  styleUrls: ['./delete_user.component.scss']
})
export class DeleteUserComponent{
constructor(private router: Router) {}

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}