import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdeComponent } from './prode.component';

describe('ProdeComponent', () => {
  let component: ProdeComponent;
  let fixture: ComponentFixture<ProdeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
