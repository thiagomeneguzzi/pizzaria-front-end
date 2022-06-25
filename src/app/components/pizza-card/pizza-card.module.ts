import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaCardComponent } from './pizza-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NewOrderModule } from '../new-order/new-order.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    PizzaCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    NewOrderModule,
    MatDialogModule
  ],
  exports: [
    PizzaCardComponent
  ]
})
export class PizzaCardModule { }
