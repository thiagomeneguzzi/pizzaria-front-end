import { Component, OnInit } from '@angular/core';
import { PizzaPrices } from 'src/app/shared/enums/pizza-prices';
import { Pizzas } from 'src/app/shared/interfaces/pizza';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  pizzas: Pizzas = [
    {
      id: 'jndsa',
      name: 'Pizza Peperonni',
      description: 'Mussarela, peperonni.',
      image: 'https://s.calendarr.com/upload/datas/pi/zz/pizza_c.jpg?auto_optimize=low&width=640',
      type: PizzaPrices.traditional
    },
    {
      id: 'jndsa',
      name: 'Pizza Peperonni',
      description: 'Mussarela, peperonni.',
      image: 'https://s.calendarr.com/upload/datas/pi/zz/pizza_c.jpg?auto_optimize=low&width=640',
      type: PizzaPrices.traditional
    },
    {
      id: 'jndsa',
      name: 'Pizza Peperonni',
      description: 'Mussarela, peperonni.',
      image: 'https://s.calendarr.com/upload/datas/pi/zz/pizza_c.jpg?auto_optimize=low&width=640',
      type: PizzaPrices.traditional
    },
    {
      id: 'jndsa',
      name: 'Pizza Peperonni',
      description: 'Mussarela, peperonni.',
      image: 'https://s.calendarr.com/upload/datas/pi/zz/pizza_c.jpg?auto_optimize=low&width=640',
      type: PizzaPrices.traditional
    },
    {
      id: 'jndsa',
      name: 'Pizza Peperonni',
      description: 'Mussarela, peperonni.',
      image: 'https://s.calendarr.com/upload/datas/pi/zz/pizza_c.jpg?auto_optimize=low&width=640',
      type: PizzaPrices.traditional
    },
    {
      id: 'jndsa',
      name: 'Pizza Peperonni',
      description: 'Mussarela, peperonni.',
      image: 'https://s.calendarr.com/upload/datas/pi/zz/pizza_c.jpg?auto_optimize=low&width=640',
      type: PizzaPrices.traditional
    },
    {
      id: 'jndsa',
      name: 'Pizza Peperonni',
      description: 'Mussarela, peperonni.',
      image: 'https://s.calendarr.com/upload/datas/pi/zz/pizza_c.jpg?auto_optimize=low&width=640',
      type: PizzaPrices.traditional
    },
    {
      id: 'jndsa',
      name: 'Pizza Peperonni',
      description: 'Mussarela, peperonni.',
      image: 'https://s.calendarr.com/upload/datas/pi/zz/pizza_c.jpg?auto_optimize=low&width=640',
      type: PizzaPrices.traditional
    },
    {
      id: 'jndsa',
      name: 'Pizza Peperonni',
      description: 'Mussarela, peperonni.',
      image: 'https://s.calendarr.com/upload/datas/pi/zz/pizza_c.jpg?auto_optimize=low&width=640',
      type: PizzaPrices.traditional
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
