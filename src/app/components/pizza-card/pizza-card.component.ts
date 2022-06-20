import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Order } from 'src/app/interfaces/order';
import { Pizza } from 'src/app/interfaces/pizza';
import { UniqueIdService } from 'src/app/shared/unique-id-service/unique-id-service.service';
import { NewOrderComponent } from '../new-order/new-order.component';

@Component({
  selector: 'app-pizza-card',
  templateUrl: './pizza-card.component.html',
  styleUrls: ['./pizza-card.component.scss']
})
export class PizzaCardComponent implements OnInit {
  @Input() pizza!: Pizza;

  constructor(
    private dialog: MatDialog,
    private uniqueIdService: UniqueIdService
    ) { }

  ngOnInit(): void {
  }

  public makeOrder() {
    const dialogRef = this.dialog.open(NewOrderComponent, {})

    dialogRef.afterClosed().subscribe((result: Order) => {
      if(result) {
        const order: Order = {
          id: this.uniqueIdService.generateUniqueId(),
          size: result.size,
          flavorOne: result.flavorOne,
          flavorTwo: result.flavorTwo,
          flavorThree: result.flavorThree,
          border_flavor: result.border_flavor,
          observation: result.observation,
        }

        let orders = new Array()
        
        if(localStorage.getItem('pedido') === null) {
          orders.push(order)
        } else {
          orders = JSON.parse(localStorage.getItem('pedido')!)
          orders.push(order)
        }

        localStorage.setItem('pedido', JSON.stringify(orders))
      }
    })
  }

}
