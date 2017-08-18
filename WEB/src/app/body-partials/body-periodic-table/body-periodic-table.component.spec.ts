import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyPeriodicTableComponent } from './body-periodic-table.component';

describe('BodyPeriodicTableComponent', () => {
  let component: BodyPeriodicTableComponent;
  let fixture: ComponentFixture<BodyPeriodicTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyPeriodicTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyPeriodicTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
