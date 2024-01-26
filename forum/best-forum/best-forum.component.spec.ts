import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestForumComponent } from './best-forum.component';

describe('BestForumComponent', () => {
  let component: BestForumComponent;
  let fixture: ComponentFixture<BestForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestForumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
