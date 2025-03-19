import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

export interface DropdownData {
  name: string;
  code?: string;
  id?: string;
  [key: string]: any;
}

export interface DropdownState {
  options: string[];
  data: DropdownData[];
  loading: boolean;
  error: string | null;
}

@Component({
  standalone: false,
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent implements OnInit {
  customerForm: FormGroup;
  
  dropdownState: { [key: string]: DropdownState } = {
    country: { options: [], data: [], loading: false, error: null },
    type: { options: [], data: [], loading: false, error: null }
  };

  constructor(private fb: FormBuilder) {
    this.customerForm = this.fb.group({
      customerCode: [''],
      customerName: [''],
      type: ['', [Validators.required]],
      active: [false],
      btmFlag: [false],
      rfidFlag: [false],
      address1: [''],
      address2: [''],
      city: [''],
      stateProvince: [''],
      postalCode: [''],
      country: ['', [Validators.required]],
      contact: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: [''],
      phoneNumber: [''],
      faxNumber: [''],
      salesId: [''],
      routeId: [''],
      enterpriseId: ['']
    });
  }

  ngOnInit(): void {
    this.loadAllDropdowns();
  }

  async loadAllDropdowns(): Promise<void> {
    try {
      await this.populate_dropdown_from_json('assets/data/Customer_Please_select_type.json', 'type');
      await this.populate_dropdown_from_json('assets/data/Customer_Please_select_country_type.json', 'country');
    } catch (error) {
      console.error('Error loading dropdowns:', error);
    }
  }

  async populate_dropdown_from_json(jsonPath: string, controlName: string): Promise<void> {
    this.dropdownState[controlName].loading = true;
    this.dropdownState[controlName].error = null;
    
    try {
      const response = await fetch(jsonPath);
      
      if (!response.ok) {
        throw new Error(`Failed to load ${controlName} data. Status: ${response.status}`);
      }
      
      const data: DropdownData[] = await response.json();
      
      if (!Array.isArray(data)) {
        throw new Error(`Invalid ${controlName} data format`);
      }
      
      // Extract option names for the dropdown
      const options = data.map(item => item.name);
      
      this.dropdownState[controlName].data = data;
      this.dropdownState[controlName].options = options;
    } catch (error) {
      console.error(`Error loading ${controlName} dropdown data:`, error);
      this.dropdownState[controlName].error = error instanceof Error ? error.message : 'Unknown error';
    } finally {
      this.dropdownState[controlName].loading = false;
    }
  }

  getDropdownOptions(controlName: string): string[] {
    return this.dropdownState[controlName]?.options || [];
  }

  getDropdownData(controlName: string): DropdownData[] {
    return this.dropdownState[controlName]?.data || [];
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.customerForm.get(controlName);
    return control !== null && control.invalid && (control.dirty || control.touched);
  }

  getErrorMessage(controlName: string): string {
    const control = this.customerForm.get(controlName);
    
    if (!control) return '';
    
    if (control.hasError('required')) {
      return 'This field is required';
    }
    
    if (controlName === 'contact' && control.hasError('pattern')) {
      return 'Invalid Please enter contact here';
    }
    
    if (controlName === 'country' && control.invalid) {
      return 'Invalid Please select country type';
    }
    
    if (controlName === 'type' && control.invalid) {
      return 'Invalid Please select type';
    }
    
    return 'Invalid input';
  }
}