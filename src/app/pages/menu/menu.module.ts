import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { PizzaCardModule } from 'src/app/components/pizza-card/pizza-card.module';

@NgModule({
  declarations: [
    MenuComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PizzaCardModule,
    MenuRoutingModule,
    MatCardModule
  ]
})
export class MenuModule { }
