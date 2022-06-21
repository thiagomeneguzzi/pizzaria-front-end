import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Address } from 'src/app/shared/interfaces/address';
import { FinalOrder } from 'src/app/shared/interfaces/finalOrder';
import { Order } from 'src/app/shared/interfaces/order';
import { ViaCepService } from 'src/app/shared/services/via-cep/via-cep.service';

@Component({
  selector: 'app-finalize-order',
  templateUrl: './finalize-order.component.html',
  styleUrls: ['./finalize-order.component.scss']
})
export class FinalizeOrderComponent implements OnInit {

  finalOrderForm!: FormGroup;

  orders: Array<Order> = new Array<Order>();
  screenWidth: number = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    console.log(this.screenWidth)
  }

  constructor(
    private formbuilder: FormBuilder,
    private viaCepService: ViaCepService
  ) { }

  ngOnInit(): void {
    this.generateForm();
    this.getOrders();
  }

  public getCepData() {
    this.viaCepService.getDataFromCep(this.getCepFromInput()).subscribe((resp: any) => {
      this.finalOrderForm.patchValue({
        neighboor: resp.bairro,
        street: resp.logradouro,
      })
    })
  }

  private getCepFromInput() {
    let cep = this.finalOrderForm.get('cep')?.value;
    return cep;
  }

  private generateForm() {
    this.finalOrderForm = this.formbuilder.group({
      cep: ['', Validators.required],
      neighboor: ['', Validators.required],
      street: ['', Validators.required],
      number: ['', Validators.required],
      payment_method: ['', Validators.required],
    });
  }

  private getOrders() {
    if(localStorage.getItem('pedido') !== null) {
      this.orders = JSON.parse(localStorage.getItem('pedido')!)
    }
  }

  public finalizeOrder() {
    if(this.finalOrderForm.valid) {
      const address: Address = {
        cep: this.finalOrderForm.get('cep')!.value,
        neighboor: this.finalOrderForm.get('neighboor')!.value,
        street: this.finalOrderForm.get('street')!.value,
        number: this.finalOrderForm.get('number')!.value,
      }

      const finalOrder: FinalOrder = {
        orders: this.orders,
        price: '50',
        address: address,
        payment_method: this.finalOrderForm.get('payment_method')!.value
      }

    }
  }

}
