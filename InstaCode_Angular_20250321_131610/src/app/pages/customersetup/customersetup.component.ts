import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BreadcrumbModule } from '@michelin/theme';

@Component({
  selector: 'app-customersetup',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatSelectModule,
    MatPaginatorModule,
    BreadcrumbModule
  ],
  templateUrl: './customersetup.component.html',
  styleUrls: ['./customersetup.component.scss']
})
export class CustomersetupComponent implements OnInit {
  displayedColumns: string[] = ['select', 'accountType', 'accountNumber', 'fleetName', 'city', 'state'];
  dataSource = [
    { select: false, accountType: 'BT', accountNumber: '1311175', fleetName: 'MID OHIO VALLEY BULK TRANSPORT, INC.', city: 'MARIETTA', state: 'OH' },
    { select: false, accountType: 'BT', accountNumber: '1406396', fleetName: 'DRAWVER (ADV)', city: 'FERNLEY', state: 'NV' },
    { select: false, accountType: 'BT', accountNumber: '1517193', fleetName: 'DISA PARCEL DELIVERY LLC (AMAZON)', city: 'SCHERTZ', state: 'TX' },
    { select: false, accountType: 'BT', accountNumber: '0347286', fleetName: 'TRANSPORT YVON CAUX & FILS INC.', city: 'ST NARCISSE BEAURIVA', state: 'QC' },
    { select: false, accountType: 'BT', accountNumber: '1378812', fleetName: 'CLEMENTS AUTOMOTIVE INC (ADV)', city: 'SPARTANBURG', state: 'SC' },
    { select: false, accountType: 'BT', accountNumber: '0322539', fleetName: 'DEPARTMENT OF EDUCATION-MANITOBA', city: 'MELITA', state: 'MB' },
    { select: false, accountType: 'BT', accountNumber: '1406388', fleetName: 'SUPERIOR AIR TRANSPORT CORPORATION', city: 'OGDEN', state: 'UT' },
    { select: false, accountType: 'BT', accountNumber: '1325350', fleetName: 'HUMBOLT SCHOOLS', city: 'PRESCOTT VALLEY', state: 'NZ' },
    { select: false, accountType: 'BT', accountNumber: '1496830', fleetName: 'CORCENTRIC, LLC', city: 'BCHERRY HILL T', state: 'NJ' },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}