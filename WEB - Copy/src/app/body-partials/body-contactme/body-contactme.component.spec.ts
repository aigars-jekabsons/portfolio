import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyContactmeComponent } from './body-contactme.component';

describe('BodyContactmeComponent', () => {
  let component: BodyContactmeComponent;
  let fixture: ComponentFixture<BodyContactmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyContactmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyContactmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
