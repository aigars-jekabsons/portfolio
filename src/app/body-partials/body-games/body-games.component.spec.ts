import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyGamesComponent } from './body-games.component';

describe('BodyGamesComponent', () => {
  let component: BodyGamesComponent;
  let fixture: ComponentFixture<BodyGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
