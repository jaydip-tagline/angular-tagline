import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpadviceFooterComponent } from './helpadvice-footer.component';

describe('HelpadviceFooterComponent', () => {
  let component: HelpadviceFooterComponent;
  let fixture: ComponentFixture<HelpadviceFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpadviceFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpadviceFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
