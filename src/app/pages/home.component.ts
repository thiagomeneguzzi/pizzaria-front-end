import { Component, OnInit, } from '@angular/core';
import { Pizzas } from '../shared/interfaces/pizza';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pizzas: Pizzas = [
    {
      id: 'jndsa',
      name: 'Pizza Peperonni',
      description: 'Mussarela, peperonni.',
      image: 'https://s.calendarr.com/upload/datas/pi/zz/pizza_c.jpg?auto_optimize=low&width=640',
      price: 'R$ 50,00',
      type: 'Tradicional'
    },
    {
      id: 'jndsa',
      name: 'Pizza Peperonni',
      description: 'Mussarela, peperonni.',
      image: 'https://s.calendarr.com/upload/datas/pi/zz/pizza_c.jpg?auto_optimize=low&width=640',
      price: 'R$ 50,00',
      type: 'Tradicional'
    },
    {
      id: 'jndsa',
      name: 'Pizza Peperonni',
      description: 'Mussarela, peperonni.',
      image: 'https://s.calendarr.com/upload/datas/pi/zz/pizza_c.jpg?auto_optimize=low&width=640',
      price: 'R$ 50,00',
      type: 'Tradicional'
    },
    {
      id: 'jndsa',
      name: 'Pizza Peperonni',
      description: 'Mussarela, peperonni.',
      image: 'https://s.calendarr.com/upload/datas/pi/zz/pizza_c.jpg?auto_optimize=low&width=640',
      price: 'R$ 50,00',
      type: 'Tradicional'
    },
    {
      id: 'jndsa',
      name: 'Pizza Peperonni',
      description: 'Mussarela, peperonni.',
      image: 'https://s.calendarr.com/upload/datas/pi/zz/pizza_c.jpg?auto_optimize=low&width=640',
      price: 'R$ 50,00',
      type: 'Tradicional'
    },
    {
      id: 'jndsa',
      name: 'Pizza Peperonni',
      description: 'Mussarela, peperonni.',
      image: 'https://s.calendarr.com/upload/datas/pi/zz/pizza_c.jpg?auto_optimize=low&width=640',
      price: 'R$ 50,00',
      type: 'Tradicional'
    },
    {
      id: 'jndsa',
      name: 'Pizza Peperonni',
      description: 'Mussarela, peperonni.',
      image: 'https://s.calendarr.com/upload/datas/pi/zz/pizza_c.jpg?auto_optimize=low&width=640',
      price: 'R$ 50,00',
      type: 'Tradicional'
    },
    {
      id: 'jndsa',
      name: 'Pizza Peperonni',
      description: 'Mussarela, peperonni.',
      image: 'https://s.calendarr.com/upload/datas/pi/zz/pizza_c.jpg?auto_optimize=low&width=640',
      price: 'R$ 50,00',
      type: 'Tradicional'
    },
    {
      id: 'jndsa',
      name: 'Pizza Peperonni',
      description: 'Mussarela, peperonni.',
      image: 'https://s.calendarr.com/upload/datas/pi/zz/pizza_c.jpg?auto_optimize=low&width=640',
      price: 'R$ 50,00',
      type: 'Tradicional'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
