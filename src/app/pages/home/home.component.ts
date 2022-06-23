import { Component, OnInit } from '@angular/core';
import { PizzaPrices } from 'src/app/shared/enums/pizza-prices';
import { Pizzas } from '../../shared/interfaces/pizza';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pizzas: Pizzas = []

  constructor() { }

  ngOnInit(): void {
  }


  public getPizzas(numberOfPizzas: number) {
    for(let i = 0; i < numberOfPizzas; i++) {
      this.pizzas.push(
        {
          id: 'jndsa',
          name: 'Pizza Peperonni',
          description: 'Mussarela, peperonni.',
          image: 'https://s.calendarr.com/upload/datas/pi/zz/pizza_c.jpg?auto_optimize=low&width=640',
          type: PizzaPrices.traditional
        }
      );
    }
  }
}
