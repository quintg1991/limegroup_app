import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurStaffPage } from './our-staff.page';

describe('OurStaffPage', () => {
  let component: OurStaffPage;
  let fixture: ComponentFixture<OurStaffPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurStaffPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurStaffPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
