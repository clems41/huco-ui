import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendRecommendationFormComponent } from './send-recommendation-form.component';

describe('SendRecommendationFormComponent', () => {
  let component: SendRecommendationFormComponent;
  let fixture: ComponentFixture<SendRecommendationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendRecommendationFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SendRecommendationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
