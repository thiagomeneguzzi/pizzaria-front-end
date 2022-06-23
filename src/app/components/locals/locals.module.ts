import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalsComponent } from './locals.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [
    LocalsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatDividerModule
  ],
  exports: [
    LocalsComponent
  ]
})
export class LocalsModule { }
