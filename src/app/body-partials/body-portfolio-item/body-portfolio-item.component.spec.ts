import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyPortfolioItemComponent } from './body-portfolio-item.component';

describe('BodyPortfolioItemComponent', () => {
  let component: BodyPortfolioItemComponent;
  let fixture: ComponentFixture<BodyPortfolioItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyPortfolioItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyPortfolioItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
