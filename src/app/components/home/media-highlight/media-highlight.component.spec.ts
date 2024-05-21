import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaHighlightComponent } from './media-highlight.component';

describe('MediaHighlightComponent', () => {
  let component: MediaHighlightComponent;
  let fixture: ComponentFixture<MediaHighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaHighlightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MediaHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
