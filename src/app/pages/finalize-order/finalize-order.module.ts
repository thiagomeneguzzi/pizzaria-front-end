import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinalizeOrderComponent } from './finalize-order.component';
import { FinalizeOrderRoutingModule } from './finalize-order-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FinalizeOrderComponent
  ],
  imports: [
    CommonModule,
    FinalizeOrderRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatDividerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  exports: [
    FinalizeOrderComponent
  ]
})
export class FinalizeOrderModule { }
