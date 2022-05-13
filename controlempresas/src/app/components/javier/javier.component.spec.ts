import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavierComponent } from './javier.component';

describe('JavierComponent', () => {
  let component: JavierComponent;
  let fixture: ComponentFixture<JavierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
