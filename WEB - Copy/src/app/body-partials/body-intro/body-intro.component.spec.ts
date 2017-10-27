import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyIntroComponent } from './body-intro.component';

describe('BodyIntroComponent', () => {
  let component: BodyIntroComponent;
  let fixture: ComponentFixture<BodyIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
