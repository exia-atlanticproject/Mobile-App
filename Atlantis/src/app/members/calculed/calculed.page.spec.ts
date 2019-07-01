import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculedPage } from './calculed.page';

describe('CalculedPage', () => {
  let component: CalculedPage;
  let fixture: ComponentFixture<CalculedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
