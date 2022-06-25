import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/shared/interfaces/order';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  orders!: Array<Order>;
  screenWidth: number = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
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
    } else {
      this.orders = new Array<Order>();
    }
  }

  public clearCart() {
    localStorage.removeItem('pedido');
    this.orders = new Array<Order>();
    this.route.navigate(['home'])
  }

  public finalizeOrder() {
    this.route.navigate(['finalize-order'])
  }

}
