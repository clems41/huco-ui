import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarSigninComponent } from './top-bar-signin.component';

describe('TopBarSignupComponent', () => {
  let component: TopBarSigninComponent;
  let fixture: ComponentFixture<TopBarSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopBarSigninComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopBarSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
