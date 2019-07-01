import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousCalculsPage } from './previous-calculs.page';

describe('PreviousCalculsPage', () => {
  let component: PreviousCalculsPage;
  let fixture: ComponentFixture<PreviousCalculsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousCalculsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousCalculsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
