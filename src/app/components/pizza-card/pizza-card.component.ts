import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza-card',
  templateUrl: './pizza-card.component.html',
  styleUrls: ['./pizza-card.component.scss']
})
export class PizzaCardComponent implements OnInit {

  pizza = {
    name: 'Pizza Peperonni',
    description: 'Mussarela, peperonni.',
    image: 'https://s.calendarr.com/upload/datas/pi/zz/pizza_c.jpg?auto_optimize=low&width=640'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
