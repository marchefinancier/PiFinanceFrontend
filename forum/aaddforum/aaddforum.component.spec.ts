import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AaddforumComponent } from './aaddforum.component';

describe('AaddforumComponent', () => {
  let component: AaddforumComponent;
  let fixture: ComponentFixture<AaddforumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AaddforumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AaddforumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
