import { Component, Input, OnInit } from '@angular/core';
import { Pizza } from 'src/app/Interfaces/pizza';

@Component({
  selector: 'app-pizza-card',
  templateUrl: './pizza-card.component.html',
  styleUrls: ['./pizza-card.component.scss']
})
export class PizzaCardComponent implements OnInit {
  @Input() pizza!: Pizza;

  constructor() { }

  ngOnInit(): void {
  }

}
