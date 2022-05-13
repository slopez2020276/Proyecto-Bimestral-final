import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarlonComponent } from './marlon.component';

describe('MarlonComponent', () => {
  let component: MarlonComponent;
  let fixture: ComponentFixture<MarlonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarlonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarlonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
