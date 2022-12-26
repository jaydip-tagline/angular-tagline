import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiredevelopersFooterComponent } from './hiredevelopers-footer.component';

describe('HiredevelopersFooterComponent', () => {
  let component: HiredevelopersFooterComponent;
  let fixture: ComponentFixture<HiredevelopersFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiredevelopersFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiredevelopersFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
