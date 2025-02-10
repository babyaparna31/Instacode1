import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bill-pay',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bill_pay.component.html',
  styleUrls: ['./bill_pay.component.scss']
})
export class BillPayComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    this.setupFormValidation();
  }

  setupFormValidation() {
    const amountInput = document.querySelector('.amount-input') as HTMLInputElement;
    const recipientInput = document.querySelector('.recipient-input') as HTMLInputElement;
    const typeInput = document.querySelector('.type-input') as HTMLInputElement;
    const dateInput = document.querySelector('.date-input') as HTMLInputElement;
    const form = document.getElementById('paymentForm') as HTMLFormElement;

    // Amount validation
    if (amountInput) {
      amountInput.addEventListener('input', () => {
        const value = amountInput.value.replace('$', '').trim();
        const amount = parseFloat(value);
        
        if (!value) {
          amountInput.setCustomValidity('Amount is required');
        } else if (isNaN(amount)) {
          amountInput.setCustomValidity('Please enter a valid amount');
        } else if (amount <= 0) {
          amountInput.setCustomValidity('Amount must be greater than 0');
        } else if (amount > 10000) {
          amountInput.setCustomValidity('Amount cannot exceed $10,000');
        } else {
          amountInput.setCustomValidity('');
        }
      });
    }

    // Recipient validation
    if (recipientInput) {
      recipientInput.addEventListener('input', () => {
        const value = recipientInput.value.trim();
        
        if (!value) {
          recipientInput.setCustomValidity('Recipient name is required');
        } else if (value.length < 2) {
          recipientInput.setCustomValidity('Recipient name must be at least 2 characters');
        } else if (!/^[a-zA-Z\s]*$/.test(value)) {
          recipientInput.setCustomValidity('Only letters and spaces allowed');
        } else {
          recipientInput.setCustomValidity('');
        }
      });
    }

    // Payment type validation
    if (typeInput) {
      typeInput.addEventListener('input', () => {
        const value = typeInput.value.trim().toLowerCase();
        const validTypes = ['one-time', 'recurring', 'scheduled'];
        
        if (!value) {
          typeInput.setCustomValidity('Payment type is required');
        } else if (!validTypes.includes(value)) {
          typeInput.setCustomValidity('Select: One-Time, Recurring, or Scheduled');
        } else {
          typeInput.setCustomValidity('');
        }
      });
    }

    // Date validation
    if (dateInput) {
      dateInput.addEventListener('input', () => {
        const selectedDate = new Date(dateInput.value);
        const today = new Date();
        const maxDate = new Date();
        maxDate.setFullYear(today.getFullYear() + 1);
        
        if (!dateInput.value) {
          dateInput.setCustomValidity('Payment date is required');
        } else if (selectedDate < today) {
          dateInput.setCustomValidity('Date cannot be in the past');
        } else if (selectedDate > maxDate) {
          dateInput.setCustomValidity('Date cannot be more than 1 year ahead');
        } else {
          dateInput.setCustomValidity('');
        }
      });
    }

    // Form submission
    if (form) {
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const inputs = [amountInput, recipientInput, typeInput, dateInput];
        const emptyFields: string[] = []; // Explicitly declaring type as string array
        let isValid = true;
        
        // Check each input for empty values and validation messages
        inputs.forEach(input => {
          if (input) {
            input.dispatchEvent(new Event('input'));
            if (!input.value.trim()) {
              // Use non-null assertion since we know placeholder exists in our inputs
              emptyFields.push(input.placeholder!);
              isValid = false;
            } else if (input.validationMessage) {
              isValid = false;
            }
          }
        });

        // Show alert for empty fields
        if (emptyFields.length > 0) {
          alert(`Please fill in all required fields: ${emptyFields.join(', ')}`);
          return;
        }

     
        // If all validations pass, show success message
        alert('Payment processed successfully!');
        
        // Optional: Reset form after successful submission
        form.reset();
        
        // Optional: Set default values after reset
        if (amountInput) amountInput.value = '$250.00';
        if (recipientInput) recipientInput.value = 'John Doe';
        if (typeInput) typeInput.value = 'One-Time';
        if (dateInput) dateInput.value = '2025-01-12';
      });
    }
  }

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}