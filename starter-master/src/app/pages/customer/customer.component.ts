import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

interface DropdownData {
  name: string;
  [key: string]: any;
}

interface DropdownState {
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
    customerType: {
      options: [],
      data: [],
      loading: false,
      error: null
    },
    country: {
      options: [],
      data: [],
      loading: false,
      error: null
    }
  };

  constructor(private fb: FormBuilder) {
    this.customerForm = this.fb.group({
      customerCode: ['', [
        Validators.required, 
        Validators.pattern('^[0-9]{5}$')
      ]],
      customerName: [''],
      customerType: ['', Validators.required],
      active: [false],
      btmFlag: [false],
      rfidFlag: [false],
      address1: [''],
      address2: [''],
      city: [''],
      stateProvince: [''],
      postalCode: [''],
      country: ['', Validators.required],
      contact: [''],
      emailAddress: [''],
      phoneNumber: [''],
      faxNumber: [''],
      salesId: [''],
      routeId: [''],
      enterpriseId: ['']
    });
  }

  ngOnInit(): void {
    this.populate_dropdown_from_json('assets/data/Customer_Please_select_type.json', 'customerType');
    this.populate_dropdown_from_json('assets/data/Customer_Please_select_type.json', 'country');
  }

  async populate_dropdown_from_json(jsonPath: string, controlName: string): Promise<void> {
    try {
      if (!this.dropdownState[controlName]) {
        this.dropdownState[controlName] = {
          options: [],
          data: [],
          loading: false,
          error: null
        };
      }
      
      this.dropdownState[controlName].loading = true;
      this.dropdownState[controlName].error = null;
      
      const response = await fetch(jsonPath);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (Array.isArray(data)) {
        this.dropdownState[controlName].data = data;
        this.dropdownState[controlName].options = data.map(item => item.name || '');
      } else {
        throw new Error('Invalid data format: expected an array');
      }
    } catch (error) {
      console.error(`Error loading dropdown data for ${controlName}:`, error);
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

  isFieldInvalid(controlName: string): boolean {
    const control = this.customerForm.get(controlName);
    return control !== null && control.invalid && (control.dirty || control.touched);
  }

  getErrorMessage(controlName: string): string {
    const control = this.customerForm.get(controlName);
    
    if (control?.errors) {
      if (control.errors['required']) {
        return 'This field is required';
      }
      if (control.errors['pattern']) {
        if (controlName === 'customerCode') {
          return 'Invalid Please enter customer code here';
        }
      }
      if (controlName === 'customerType' || controlName === 'country') {
        return `Invalid Please select type`;
      }
    }
    
    return '';
  }

  onSubmit(): void {
    if (this.customerForm.valid) {
      console.log('Form submitted:', this.customerForm.value);
    } else {
      this.customerForm.markAllAsTouched();
    }
  }
}