import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyPortfolioComponent } from './body-portfolio.component';

describe('BodyPortfolioComponent', () => {
  let component: BodyPortfolioComponent;
  let fixture: ComponentFixture<BodyPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
