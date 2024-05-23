import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarSignupComponent } from './top-bar-signup.component';

describe('TopBarSignupComponent', () => {
  let component: TopBarSignupComponent;
  let fixture: ComponentFixture<TopBarSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopBarSignupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopBarSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
