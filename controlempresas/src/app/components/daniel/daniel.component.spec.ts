import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanielComponent } from './daniel.component';

describe('DanielComponent', () => {
  let component: DanielComponent;
  let fixture: ComponentFixture<DanielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
