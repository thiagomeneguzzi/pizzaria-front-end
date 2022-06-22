import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AppModule } from 'src/app/app.module';
import { Order } from 'src/app/shared/interfaces/order';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  })

  it('Should create component', () => {
    expect(component).toBeTruthy()
  })

  it('Should instanciate orders Array when ngOnInit finishes', () => {
    fixture.detectChanges();
    expect(component.orders).toBeTruthy()
  })

  it(`${HeaderComponent.prototype.clearCart} should clear cart when called`, () => {
    fixture.detectChanges();
    
    const order: Order = {
      border_flavor: "Cheddar",
      flavorOne: {
        description: "Mussarela, peperonni.",
        id: "f6de5e8b-3d45-4d55-aa5b-1e42afd58770",
        image: "https://s.calendarr.com/upload/datas/pi/zz/pizza_c.jpg?auto_optimize=low&width=640",
        name: "Pizza Peperonni",
        type: {
          order: 1, 
          name: "Tradicional", 
          price: 39.9
        }
      },
      flavorTwo: undefined,
      flavorThree: undefined,
      id: "35969b86-2ccc-4500-95b8-5ed0e8fca684",
      observation: "",
      size: "Média"
    }

    component.orders.push(order);
    component.clearCart()

    expect(component.orders.length).toBe(0)
  })

  it(`${HeaderComponent.prototype.finalizeOrder} should navigate to /finalize-order url when called`, inject([Router], (mockRouter: Router) => {
    const spy = spyOn(mockRouter, 'navigate').and.stub();
    component.finalizeOrder();
    expect(spy.calls.first().args[0]).toContain('finalize-order');
  }))

  it(`should trigger onResize method when window is resized`, () => {
    const spyOnResize = spyOn(component, 'onResize');
    window.dispatchEvent(new Event('resize'));
    expect(spyOnResize).toHaveBeenCalled();
  });
  
});
