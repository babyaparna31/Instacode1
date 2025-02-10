import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface UserData {
  name: string;
  dob: string;
  phone: string;
  email: string;
}

@Component({
  selector: 'app-add_user',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './add_user.component.html',
  styleUrls: ['./add_user.component.scss']
})
export class AdduserComponent {
  userData: UserData = {
    name: '',
    dob: '',
    phone: '',
    email: ''
  };

  constructor(private router: Router) {}

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }

  saveUser(): void {
    // Add validation here
    if (this.validateForm()) {
      // Here you would typically make an API call to save the user
      console.log('Saving user:', this.userData);
      // After successful save, navigate to list
      alert('User saved successfully!');

    }
  }

  private validateForm(): boolean {
    if (!this.userData.name || !this.userData.dob || 
        !this.userData.phone || !this.userData.email) {
      alert('Please fill in all required fields');
      return false;
    }
    
    // Add email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.userData.email)) {
      alert('Please enter a valid email address');
      return false;
    }

    // Add phone validation
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(this.userData.phone)) {
      alert('Please enter a valid 10-digit phone number');
      return false;
    }

    return true;
  }
}