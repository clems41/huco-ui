import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarAddUserComponent } from './top-bar-add-user.component';

describe('TopBarAddUserComponent', () => {
  let component: TopBarAddUserComponent;
  let fixture: ComponentFixture<TopBarAddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopBarAddUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopBarAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
