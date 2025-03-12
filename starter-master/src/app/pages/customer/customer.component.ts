import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

interface DropdownData {
  name: string;
  [key: string]: any;
}

interface DropdownState {
  options: string[];
  data: DropdownData[];
}

@Component({
  standalone: false,
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent implements OnInit {
  customerForm: FormGroup;
  
  dropdownState: Record<string, DropdownState> = {
    'customerType': { options: [], data: [] },
    'geoType': { options: [], data: [] }
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    this.loadDropdowns();
  }

  initForm(): void {
    this.customerForm = this.fb.group({
      customerCode: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]],
      customerName: ['', Validators.required],
      customerType: ['', Validators.required],
      active: [false, Validators.required],
      btmFlag: [false],
      rfidFlag: [false],
      address1: [''],
      address2: ['', Validators.required],
      city: [''],
      stateProvince: ['', Validators.required],
      postalCode: [''],
      geoType: ['', Validators.required],
      contact: ['', [Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [''],
      faxNumber: [''],
      salesId: [''],
      routeId: [''],
      enterpriseId: ['']
    });
  }

  async loadDropdowns(): Promise<void> {
    try {
      await this.populate_dropdown_from_json('assets/data/Customer_Please_select_type.json', 'customerType');
      await this.populate_dropdown_from_json('assets/data/Customer_Please_select_type.json', 'geoType');
    } catch (error) {
      console.error('Error loading dropdown data:', error);
    }
  }

  async populate_dropdown_from_json(jsonPath: string, controlName: string): Promise<void> {
    try {
      const response = await fetch(jsonPath);
      if (!response.ok) {
        throw new Error(`Failed to load ${jsonPath}: ${response.statusText}`);
      }
      
      const data: DropdownData[] = await response.json();
      
      if (!Array.isArray(data)) {
        throw new Error(`Invalid data format in ${jsonPath}`);
      }
      
      const options = data.map(item => item.name);
      
      this.dropdownState[controlName] = {
        options: options,
        data: data
      };
    } catch (error) {
      console.error(`Error loading dropdown data for ${controlName}:`, error);
      throw error;
    }
  }

  getDropdownOptions(controlName: string): string[] {
    return this.dropdownState[controlName]?.options || [];
  }

  getDropdownData(controlName: string): DropdownData[] {
    return this.dropdownState[controlName]?.data || [];
  }

  onSubmit(): void {
    if (this.customerForm.valid) {
      console.log('Form submitted:', this.customerForm.value);
    } else {
      this.markFormGroupTouched(this.customerForm);
    }
  }

  markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if ((control as FormGroup).controls) {
        this.markFormGroupTouched(control as FormGroup);
      }
    });
  }
}