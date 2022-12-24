import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologiesNameComponent } from './technologies-name.component';

describe('TechnologiesNameComponent', () => {
  let component: TechnologiesNameComponent;
  let fixture: ComponentFixture<TechnologiesNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologiesNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologiesNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
