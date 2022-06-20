import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss']
})
export class NewOrderComponent implements OnInit {

  orderForm!: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    public dialogRef: MatDialogRef<NewOrderComponent>,
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
