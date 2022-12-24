import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceDataleftComponent } from './experience-dataleft.component';

describe('ExperienceDataleftComponent', () => {
  let component: ExperienceDataleftComponent;
  let fixture: ComponentFixture<ExperienceDataleftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceDataleftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceDataleftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
