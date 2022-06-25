import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LocalsModule } from 'src/app/components/locals/locals.module';
import { PizzaCardModule } from 'src/app/components/pizza-card/pizza-card.module';
import { NewOrderModule } from 'src/app/components/new-order/new-order.module';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    PizzaCardModule,
    NewOrderModule,
    LocalsModule,
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
