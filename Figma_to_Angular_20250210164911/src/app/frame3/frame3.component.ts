import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface UserData {
  name: string;
  dob: string;
  accountNo?: string;
  address?: string;
  phone: string;
  email: string;
}

@Component({
  selector: 'app-frame3',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './frame3.component.html',
  styleUrls: ['./frame3.component.scss']
})
export class UserFormComponent implements AfterViewInit {
  userForm: FormGroup;
  maxDate: string;

  @ViewChild('userFormElement') userFormElement!: ElementRef<HTMLFormElement>;

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) {
    this.maxDate = new Date().toISOString().split('T')[0];

    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      dob: ['', [Validators.required]],
      accountNo: [''],
      address: [''],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.email]] // Added email validator
    });
  }

  ngAfterViewInit() {
    // Initial validation setup
    Object.keys(this.userForm.controls).forEach(key => {
      this.setupFieldValidation(key);
    });

    // Subscribe to form value changes
    this.userForm.valueChanges.subscribe(() => {
      Object.keys(this.userForm.controls).forEach(key => {
        this.updateValidationMessage(key);
      });
    });
  }

  private setupFieldValidation(fieldName: string) {
    const inputElement = this.userFormElement.nativeElement.querySelector(
      `[formControlName="${fieldName}"]`
    ) as HTMLInputElement;

    if (!inputElement) return;

    // Set initial validation message
    this.updateValidationMessage(fieldName);

    // Update validation on blur
    inputElement.addEventListener('blur', () => {
      const control = this.userForm.get(fieldName);
      if (control) {
        control.markAsTouched();
        this.updateValidationMessage(fieldName);
      }
    });

    // Clear validation message while typing
    inputElement.addEventListener('input', () => {
      inputElement.setCustomValidity('');
    });
  }

  private updateValidationMessage(fieldName: string) {
    const control = this.userForm.get(fieldName);
    const inputElement = this.userFormElement.nativeElement.querySelector(
      `[formControlName="${fieldName}"]`
    ) as HTMLInputElement;

    if (!control || !inputElement) return;

    const errorMessage = this.getErrorMessage(fieldName);
    inputElement.setCustomValidity(errorMessage);
    
    // Trigger browser's native validation UI
    if (errorMessage && control.touched) {
      inputElement.reportValidity();
    }
  }

  private getErrorMessage(fieldName: string): string {
    const control = this.userForm.get(fieldName);
    if (!control || !control.errors || !control.touched) return '';

    const errors = control.errors;
    
    const errorMessages: { [key: string]: string } = {
      name: {
        required: 'Please enter your name',
        minlength: 'Name must be at least 2 characters long'
      },
      dob: {
        required: 'Please enter your date of birth'
      },
      phone: {
        required: 'Please enter your phone number',
        pattern: 'Phone number must be exactly 10 digits'
      },
      email: {
        email: 'Please enter a valid email address'
      }
    }[fieldName] || {};

    // Return the first applicable error message
    for (const errorKey in errors) {
      if (errorMessages[errorKey]) {
        return errorMessages[errorKey];
      }
    }

    return 'Invalid input';
  }

  saveUser(): void {
    // Mark all fields as touched to trigger validation
    Object.keys(this.userForm.controls).forEach(key => {
      const control = this.userForm.get(key);
      if (control) {
        control.markAsTouched();
        this.updateValidationMessage(key);
      }
    });

    if (this.userForm.invalid) {
      // Find the first invalid input and focus it
      const firstInvalidInput = this.userFormElement.nativeElement.querySelector(
        'input:invalid'
      ) as HTMLInputElement;
      if (firstInvalidInput) {
        firstInvalidInput.focus();
      }
      return;
    }

    const userData: UserData = this.userForm.value;
    console.log('Saving user:', userData);
    alert('User saved successfully!');
    this.userForm.reset();
  }
}