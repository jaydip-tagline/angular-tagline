import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurblogCardComponent } from './ourblog-card.component';

describe('OurblogCardComponent', () => {
  let component: OurblogCardComponent;
  let fixture: ComponentFixture<OurblogCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurblogCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurblogCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
