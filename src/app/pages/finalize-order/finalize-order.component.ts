import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PizzaPrices } from 'src/app/shared/enums/pizza-prices';
import { Address } from 'src/app/shared/interfaces/address';
import { FinalOrder } from 'src/app/shared/interfaces/finalOrder';
import { Order } from 'src/app/shared/interfaces/order';
import { UniqueIdService } from 'src/app/shared/services/unique-id-service/unique-id-service.service';
import { ViaCepService } from 'src/app/shared/services/via-cep/via-cep.service';
import { UtilsService } from 'src/app/shared/utils/utils.service';

@Component({
  selector: 'app-finalize-order',
  templateUrl: './finalize-order.component.html',
  styleUrls: ['./finalize-order.component.scss']
})
export class FinalizeOrderComponent implements OnInit {

  finalOrderForm!: FormGroup;

  orders: Array<Order> = new Array<Order>();
  finalValue: number = 0;

  constructor(
    private formbuilder: FormBuilder,
    // private viaCepService: ViaCepService,
    private utilsService: UtilsService,
    private uniqueIdService: UniqueIdService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.generateForm();
    this.getOrders();
  }

  // public getCepData() {
  //   this.viaCepService.getDataFromCep(this.getCepFromInput()).subscribe((resp: any) => {
  //     this.finalOrderForm.patchValue({
  //       neighboor: resp.bairro,
  //       street: resp.logradouro,
  //     })
  //   })
  // }

  private getCepFromInput() {
    let cep = this.finalOrderForm.get('cep')?.value;
    return cep;
  }

  private generateForm() {
    this.finalOrderForm = this.formbuilder.group({
      cep: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', Validators.required],
      neighboor: ['', Validators.required],
      street: ['', Validators.required],
      number: ['', Validators.required],
      payment_method: ['', Validators.required],
    });
  }

  private getOrders() {
    if(localStorage.getItem('pedido') !== null) {
      this.orders = JSON.parse(localStorage.getItem('pedido')!)
      this.orders.forEach((order) => {
        let majorType = 0

        if(order.flavorOne.type.order > majorType) {
          majorType = order.flavorOne.type.order;
        }

        if(order.flavorTwo && order.flavorTwo.type.order > majorType) {
          majorType = order.flavorTwo.type.order;
        }

        if(order.flavorThree && order.flavorThree.type.order > majorType) {
          majorType = order.flavorThree.type.order;
        }

        this.finalValue += majorType == PizzaPrices.traditional.order ? PizzaPrices.traditional.price : 
                          (majorType == PizzaPrices.special.order ? PizzaPrices.special.price : 
                          (majorType == PizzaPrices.premium.order ? PizzaPrices.premium.price : 0))
      })
    }
  }

  public finalizeOrder() {
    if(this.finalOrderForm.valid) {
      const address: Address = this.buildAddress()

      const finalOrder: FinalOrder = this.buildFinalOrder(address)

      this.utilsService.openSnackBar('Seu pedido foi realizado com sucesso \nSeu id é '+ finalOrder.id, 2);

      localStorage.removeItem('pedido')
      this.router.navigate(['/home'])
    }
  }
  
  private buildAddress(): Address {
    return {
      cep: this.finalOrderForm.get('cep')!.value,
      neighboor: this.finalOrderForm.get('neighboor')!.value,
      street: this.finalOrderForm.get('street')!.value,
      number: this.finalOrderForm.get('number')!.value,
    };
  }

  private buildFinalOrder(address: Address): FinalOrder {
    return {
      id: this.uniqueIdService.generateUniqueId(),
      orders: this.orders,
      price: this.finalValue,
      address: address,
      name: this.finalOrderForm.get('name')!.value,
      phone: this.finalOrderForm.get('phone')!.value,
      payment_method: this.finalOrderForm.get('payment_method')!.value
    };
  }

}
