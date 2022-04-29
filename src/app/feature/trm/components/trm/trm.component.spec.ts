import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { TrmService } from '../../shared/service/trm.service';

import { TrmComponent } from './trm.component';

describe('TrmComponent', () => {
  let component: TrmComponent;
  let fixture: ComponentFixture<TrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrmComponent ],
      imports: [
        CommonModule,
        HttpClientModule
      ],
      providers: [TrmService, HttpService, DatePipe]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.spinner).toBeTrue();
  });

  it('spinner debería desaparecer despues de 500ms', fakeAsync(() => {
    expect(component.spinner).toBeTrue();
    tick(500);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.spinner).toBeFalse();
    });
   }));
});
