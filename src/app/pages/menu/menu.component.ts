import { Component, OnInit } from '@angular/core';
import { PizzaPrices } from 'src/app/shared/enums/pizza-prices';
import { Pizzas } from 'src/app/shared/interfaces/pizza';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  mostOrderedPizzas: Pizzas = []
  traditionalPizzas: Pizzas = []
  specialPizzas: Pizzas = []
  premiumPizzas: Pizzas = []

  constructor() { }

  ngOnInit(): void {
    this.getPizzas(8)
  }

  public getPizzas(numberOfPizzas: number) {
    for(let i = 0; i < numberOfPizzas; i++) {
      this.mostOrderedPizzas.push(
        {
          id: 'jndsa',
          name: 'Peperonni',
          description: 'Mussarela, peperonni.',
          image: 'https://s.calendarr.com/upload/datas/pi/zz/pizza_c.jpg?auto_optimize=low&width=640',
          type: PizzaPrices.traditional
        }
      );
      this.traditionalPizzas.push(
        {
          id: 'jndsaa',
          name: 'Quatro queijos',
          description: 'Mussarela, provolone, gorgonzola e prato.',
          image: 'https://luccapizzaria.com.br/wp-content/uploads/2020/04/4-queijos.jpg',
          type: PizzaPrices.traditional
        }
      );
      this.specialPizzas.push(
        {
          id: 'jndsaa',
          name: 'Bacon',
          description: 'Mussarela, bacon.',
          image: 'https://thumb-cdn.soluall.net/prod/shp_products/sp512box/5db0a0b8-a0bc-4bbe-b895-66acac1e00f4/5db0a0b8-e60c-41aa-ba12-66acac1e00f4.jpg',
          type: PizzaPrices.special
        }
      );
      this.premiumPizzas.push(
        {
          id: 'jndsaa',
          name: 'Camarão',
          description: 'Mussarela, camarão, cebola, cheddar e orégano.',
          image: 'https://shoppoupeaqui.com.br/1732-large_default/pizza-camarao-c-cheddar.jpg',
          type: PizzaPrices.premium
        }
      );
    }
  }


}
