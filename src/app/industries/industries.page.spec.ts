import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustriesPage } from './industries.page';

describe('IndustriesPage', () => {
  let component: IndustriesPage;
  let fixture: ComponentFixture<IndustriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndustriesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
