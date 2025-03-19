import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

interface DropdownData {
  name: string;
  code?: string;
  value?: string;
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
  customerForm!: FormGroup;
  
  dropdownState: { [key: string]: DropdownState } = {
    country: {
      options: [],
      data: [],
      loading: false,
      error: null
    },
    type: {
      options: [],
      data: [],
      loading: false,
      error: null
    }
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    this.loadDropdownData();
  }

  initForm(): void {
    this.customerForm = this.fb.group({
      contact: ['', [Validators.pattern(/^\d{10}$/)]],
      country: ['', [Validators.required]],
      type: ['', [Validators.required]]
    });
  }

  async loadDropdownData(): Promise<void> {
    try {
      await this.populate_dropdown_from_json('assets/data/Customer_Please_select_your_country.json', 'country');
      await this.populate_dropdown_from_json('assets/data/Customer_Please_select_type.json', 'type');
    } catch (error) {
      console.error('Error loading dropdown data:', error);
    }
  }

  async populate_dropdown_from_json(jsonPath: string, controlName: string): Promise<void> {
    this.dropdownState[controlName].loading = true;
    this.dropdownState[controlName].error = null;
    
    try {
      const response = await fetch(jsonPath);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data: DropdownData[] = await response.json();
      
      this.dropdownState[controlName].data = data;
      this.dropdownState[controlName].options = data.map(item => item.name);
      this.dropdownState[controlName].loading = false;
    } catch (error) {
      console.error(`Error fetching ${controlName} data:`, error);
      this.dropdownState[controlName].error = 'Failed to load data';
      this.dropdownState[controlName].loading = false;
    }
  }

  getDropdownOptions(controlName: string): string[] {
    return this.dropdownState[controlName]?.options || [];
  }

  getDropdownData(controlName: string): DropdownData[] {
    return this.dropdownState[controlName]?.data || [];
  }

  isFieldInvalid(fieldName: string): boolean {
    const control = this.customerForm.get(fieldName);
    return !!control && control.invalid && (control.dirty || control.touched);
  }
}