import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NewOrderComponent } from './new-order.component';
import { NewOrderModule } from './new-order.module';

describe('NewOrderComponent', () => {
  let component: NewOrderComponent;
  let fixture: ComponentFixture<NewOrderComponent>;
  let dialogRef: MatDialogRef<NewOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewOrderModule, MatDialogModule, BrowserAnimationsModule],
      providers: [
        { provide: MatDialogRef, useValue: dialogRef }
      ]
    }).compileComponents()

    fixture = TestBed.createComponent(NewOrderComponent)
    component = fixture.componentInstance;
  })

  it('Should create component', () => {
    expect(component).toBeTruthy()
  })

  it(`${NewOrderComponent.prototype.orderForm} should be initialized when ngOnInit started`, () => {
    fixture.detectChanges()
    expect(component.orderForm).toBeTruthy()
  })

  it(`${NewOrderComponent.prototype.pizzas} should be initialized when ngOnInit started`, () => {
    fixture.detectChanges()
    expect(component.pizzas.length).toBeGreaterThanOrEqual(0)
  })

});
