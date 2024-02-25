import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoMiniComponent } from './video-mini.component';

describe('VideoMiniComponent', () => {
  let component: VideoMiniComponent;
  let fixture: ComponentFixture<VideoMiniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoMiniComponent]
    });
    fixture = TestBed.createComponent(VideoMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
