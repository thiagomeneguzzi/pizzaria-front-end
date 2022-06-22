import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { PizzaPrices } from 'src/app/shared/enums/pizza-prices';
import { Pizzas } from 'src/app/shared/interfaces/pizza';
import { UniqueIdService } from 'src/app/shared/services/unique-id-service/unique-id-service.service';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss']
})
export class NewOrderComponent implements OnInit {

  orderForm!: FormGroup;
  pizzas!: Pizzas

  constructor(
    private formbuilder: FormBuilder,
    private dialogRef: MatDialogRef<NewOrderComponent>,
    private uniqueIdService: UniqueIdService
  ) { }

  ngOnInit(): void {
    this.orderForm = this.formbuilder.group({
      size: ['', Validators.required],
      flavorOne: ['', Validators.required],
      flavorTwo: [''],
      flavorThree: [''],
      border_flavor: ['', Validators.required],
      observation: [''],
    })
    this.getPizzas();
  }

  public getPizzas() {
    this.pizzas = [
      {
        id: this.uniqueIdService.generateUniqueId(),
        name: 'Pizza Peperonni',
        description: 'Mussarela, peperonni.',
        image: 'https://s.calendarr.com/upload/datas/pi/zz/pizza_c.jpg?auto_optimize=low&width=640',
        type: PizzaPrices.traditional
      },
      {
        id: this.uniqueIdService.generateUniqueId(),
        name: 'Pizza Calabresa',
        description: 'Mussarela, calabresa e cebola.',
        image: 'https://s.calendarr.com/upload/datas/pi/zz/pizza_c.jpg?auto_optimize=low&width=640',
        type: PizzaPrices.traditional
      },
      {
        id: this.uniqueIdService.generateUniqueId(),
        name: 'Pizza Quatro Queijos',
        description: 'Mussarela, gorgonzola, provolone e prato.',
        image: 'https://s.calendarr.com/upload/datas/pi/zz/pizza_c.jpg?auto_optimize=low&width=640',
        type: PizzaPrices.traditional
      },
    ]
  }

  public addOrder() {
    if(this.orderForm.valid) {
      this.dialogRef.close(this.orderForm.value)
    }
  }
  
  public disposeOrder() {
    this.dialogRef.close()
  }

}
