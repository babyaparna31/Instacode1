import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule]
})
export class HomeComponent implements OnInit {
  appointmentForm: FormGroup;
  submitted = false;
  loading = false;
  doctorTypes = ['General Physician', 'Cardiologist', 'Dermatologist', 'Neurologist', 'Pediatrician'];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.appointmentForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [
        Validators.required, 
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@gmail\.com$/)
      ]],
      gender: ['', [Validators.required]],
      doctorType: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    // Any additional initialization logic can go here
  }

  // Getter for easy access to form fields
  get f() { 
    return this.appointmentForm.controls; 
  }

  onSubmit(): void {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.appointmentForm.invalid) {
      let errorMessages = [];
      
      if (this.f['firstName'].errors) {
        errorMessages.push('Invalid Please Enter Your first name');
      }
      
      if (this.f['lastName'].errors) {
        errorMessages.push('Invalid Please Enter Your last name');
      }
      
      if (this.f['phone'].errors) {
        errorMessages.push('Invalid Please Enter phone');
      }
      
      if (this.f['email'].errors) {
        errorMessages.push('Invalid Please Enter Your Email');
      }
      
      if (this.f['gender'].errors) {
        errorMessages.push('Invalid Gender*');
      }
      
      if (this.f['doctorType'].errors) {
        errorMessages.push('Please select doctor type');
      }
      
      alert(errorMessages.join('\n'));
      return;
    }

    this.loading = true;
    
    // Simulate API call with timeout
    setTimeout(() => {
      alert('Login successful');
      this.loading = false;
      this.router.navigate(['/Hr']);
    }, 1000);
  }

  setGender(gender: string): void {
    this.appointmentForm.patchValue({
      gender: gender
    });
  }
}