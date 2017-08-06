import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyLightboxComponent } from './body-lightbox.component';

describe('BodyLightboxComponent', () => {
  let component: BodyLightboxComponent;
  let fixture: ComponentFixture<BodyLightboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyLightboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyLightboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
