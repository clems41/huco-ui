import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendRecommendationComponent } from './send-recommendation.component';

describe('SendRecommendationComponent', () => {
  let component: SendRecommendationComponent;
  let fixture: ComponentFixture<SendRecommendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendRecommendationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SendRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
