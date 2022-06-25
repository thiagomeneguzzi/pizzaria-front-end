import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, RouterModule } from '@angular/router';
import { AppModule } from 'src/app/app.module';
import { UtilsService } from 'src/app/shared/utils/utils.service';

import { FinalizeOrderComponent } from './finalize-order.component';
import { FinalizeOrderGuard } from './finalize-order.guard';
import { FinalizeOrderModule } from './finalize-order.module';

describe('FinalizeOrderComponent', () => {
  let component: FinalizeOrderComponent;
  let fixture: ComponentFixture<FinalizeOrderComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FinalizeOrderModule, MatSnackBarModule, BrowserAnimationsModule ],
      providers: [
        { provide: Router, useValue: router }
      ]
    }).compileComponents();
    
    router = TestBed.inject(Router)
    fixture = TestBed.createComponent(FinalizeOrderComponent)
    component = fixture.componentInstance;
  })

  it('Should create component', () => {
    expect(component).toBeTruthy()
  })

  it(`${FinalizeOrderComponent.prototype.finalOrderForm} should be initialized when ngOnInit started`, () => {
    fixture.detectChanges();
    expect(component.finalOrderForm).toBeTruthy()
  })
})

