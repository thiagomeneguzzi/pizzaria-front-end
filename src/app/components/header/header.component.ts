import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/shared/interfaces/order';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  orders: Array<Order> = new Array<Order>();

  screenWidth: number = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    console.log(this.screenWidth)
  }

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
    this.getOrders()
  }

  public getOrders() {
    if(localStorage.getItem('pedido') !== null) {
      this.orders = JSON.parse(localStorage.getItem('pedido')!)
    }
  }

  public clearCart() {
    localStorage.removeItem('pedido');
    this.orders = new Array<Order>();
  }

  public finalizeOrder() {
    // TODO criar tela de finalizar pedido e utilizar este método pra direcionar para lá.
    this.route.navigate(['finalize-order'])
  }

}
