import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDevicePage } from './modal-device.page';

describe('ModalDevicePage', () => {
  let component: ModalDevicePage;
  let fixture: ComponentFixture<ModalDevicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDevicePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDevicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
