import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { LocalsComponent } from 'src/app/components/locals/locals.component';
import { PizzaCardComponent } from 'src/app/components/pizza-card/pizza-card.component';


@NgModule({
  declarations: [
    HomeComponent,
    PizzaCardComponent,
    LocalsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatDividerModule,
    MatIconModule,
    MatDialogModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
