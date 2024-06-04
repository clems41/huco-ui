import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarMediaInfoComponent } from './top-bar-media-info.component';

describe('TopBarMediaInfoComponent', () => {
  let component: TopBarMediaInfoComponent;
  let fixture: ComponentFixture<TopBarMediaInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopBarMediaInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopBarMediaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
