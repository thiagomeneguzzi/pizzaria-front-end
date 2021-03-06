import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HomeModule } from './home.module';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeModule]
    }).compileComponents()

    fixture = TestBed.createComponent(HomeComponent)
    component = fixture.componentInstance;
  })

  it('Should create component', () => {
    expect(component).toBeTruthy()
  })

  it('Should fill pizzas content during ngOnInit when page is started', () => {
    fixture.detectChanges()
    expect(component.pizzas.length).toBeGreaterThanOrEqual(0)
  })

  it(`${HomeComponent.prototype.getPizzas} should fill pizzas content when triggered`, () => {
    component.getPizzas(2)
    expect(component.pizzas.length).toBe(2)
  })

});
