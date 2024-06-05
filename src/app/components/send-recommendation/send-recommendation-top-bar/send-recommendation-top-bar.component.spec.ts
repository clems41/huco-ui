import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendRecommendationTopBarComponent } from './send-recommendation-top-bar.component';

describe('SendRecommendationTopBarComponent', () => {
  let component: SendRecommendationTopBarComponent;
  let fixture: ComponentFixture<SendRecommendationTopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendRecommendationTopBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SendRecommendationTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
