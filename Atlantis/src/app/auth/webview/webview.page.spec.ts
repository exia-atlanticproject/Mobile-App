import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebviewPage } from './webview.page';

describe('WebviewPage', () => {
  let component: WebviewPage;
  let fixture: ComponentFixture<WebviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
