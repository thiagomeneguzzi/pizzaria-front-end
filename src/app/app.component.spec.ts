import { TestBed } from '@angular/core/testing';
import { AppModule } from './app.module';

describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AppModule ],
    }).compileComponents();
  });

})
