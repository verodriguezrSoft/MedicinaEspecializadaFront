import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { CitaComponent } from './cita.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CitaComponent', () => {
  let component: CitaComponent;
  let fixture: ComponentFixture<CitaComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitaComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
