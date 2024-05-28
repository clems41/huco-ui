import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedUserComponent } from './related-user.component';

describe('RelatedUserComponent', () => {
  let component: RelatedUserComponent;
  let fixture: ComponentFixture<RelatedUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatedUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RelatedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
