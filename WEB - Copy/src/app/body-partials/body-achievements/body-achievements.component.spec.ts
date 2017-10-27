import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyAchievementsComponent } from './body-achievements.component';

describe('BodyAchievementsComponent', () => {
  let component: BodyAchievementsComponent;
  let fixture: ComponentFixture<BodyAchievementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyAchievementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyAchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
