import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropleftServiceComponent } from './dropleft-service.component';

describe('DropleftServiceComponent', () => {
  let component: DropleftServiceComponent;
  let fixture: ComponentFixture<DropleftServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropleftServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropleftServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
