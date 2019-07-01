import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationPage } from './calculation.page';

describe('CalculationPage', () => {
  let component: CalculationPage;
  let fixture: ComponentFixture<CalculationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
