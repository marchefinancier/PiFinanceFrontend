import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrapChatboatComponent } from './scrap-chatboat.component';

describe('ScrapChatboatComponent', () => {
  let component: ScrapChatboatComponent;
  let fixture: ComponentFixture<ScrapChatboatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrapChatboatComponent]
    });
    fixture = TestBed.createComponent(ScrapChatboatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
