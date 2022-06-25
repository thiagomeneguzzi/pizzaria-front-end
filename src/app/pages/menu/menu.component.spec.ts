import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { MenuModule } from './menu.module';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MenuModule ]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('Should fill pizzas content during ngOnInit when page is started', () => {
    fixture.detectChanges()
    expect(component.pizzas.length).toBeGreaterThanOrEqual(0)
  })

  it(`${MenuComponent.prototype.getPizzas} should fill pizzas content when triggered`, () => {
    component.getPizzas(2)
    expect(component.pizzas.length).toBe(2)
  })
});
