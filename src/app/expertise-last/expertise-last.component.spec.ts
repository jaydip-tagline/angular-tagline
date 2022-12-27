import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertiseLastComponent } from './expertise-last.component';

describe('ExpertiseLastComponent', () => {
  let component: ExpertiseLastComponent;
  let fixture: ComponentFixture<ExpertiseLastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertiseLastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpertiseLastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
