import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  @ViewChild('usernameInput', { static: false }) usernameInput!: ElementRef;
  @ViewChild('passwordInput', { static: false }) passwordInput!: ElementRef;

  constructor(private router: Router) {}

  onSubmit(form: NgForm) {
    this.error = '';

    // Get input elements
    const usernameField = this.usernameInput.nativeElement;
    const passwordField = this.passwordInput.nativeElement;

    // Reset previous errors
    usernameField.setCustomValidity('');
    passwordField.setCustomValidity('');

    // Validate username
    if (!this.username) {
      usernameField.setCustomValidity('Username is required');
      usernameField.reportValidity();
      return;
    }

    // Validate password length
    if (this.password.length < 8) {
      passwordField.setCustomValidity('Password must be at least 8 characters long');
      passwordField.reportValidity();
      return;
    }

    // Check if email ends with @gmail.com
    if (this.username.toLowerCase().endsWith('@gmail.com')) {
      this.router.navigate(['/account_management']);
    } else if (this.username === 'admin') {
      this.router.navigate(['/add_user']);
    } else {
      // Set custom validity for invalid credentials
      usernameField.setCustomValidity('Invalid username give either "admin" or "custom email"');
      usernameField.reportValidity();
    
    }
  }
}