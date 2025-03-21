import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@michelin/theme';
import { BreadcrumbModule } from '@michelin/theme';
import { IconModule } from '@michelin/theme';

@Component({
  selector: 'app-accountinfo',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    BreadcrumbModule,
    IconModule
  ],
  templateUrl: './accountinfo.component.html',
  styleUrls: ['./accountinfo.component.scss']
})
export class AccountinfoComponent {
  // No additional functionality needed for this component
}