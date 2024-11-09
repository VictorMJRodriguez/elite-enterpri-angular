/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IconStripComponent } from './icon-strip.component';

describe('IconStripComponent', () => {
  let component: IconStripComponent;
  let fixture: ComponentFixture<IconStripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconStripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
