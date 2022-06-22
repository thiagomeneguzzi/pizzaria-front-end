import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeModule } from 'src/app/pages/home/home.module';

import { LocalsComponent } from './locals.component';

describe('LocalsComponent', () => {
  let component: LocalsComponent;
  let fixture: ComponentFixture<LocalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LocalsComponent)
    component = fixture.componentInstance;
  })

  it(`should trigger onResize method when window is resized`, () => {
    const spyOnResize = spyOn(component, 'onResize');
    window.dispatchEvent(new Event('resize'));
    expect(spyOnResize).toHaveBeenCalled();
  });


});
