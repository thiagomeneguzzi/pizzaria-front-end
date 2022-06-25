import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaCardComponent } from './pizza-card.component';
import { PizzaCardModule } from './pizza-card.module';

describe('PizzaCardComponent', () => {
  let component: PizzaCardComponent;
  let fixture: ComponentFixture<PizzaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PizzaCardModule]
    }).compileComponents()
  
    fixture = TestBed.createComponent(PizzaCardComponent)
    component = fixture.componentInstance;
  })

  it('Should create component', () => {
    expect(component).toBeTruthy()
  })

});
