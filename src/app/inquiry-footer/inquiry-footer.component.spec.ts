import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiryFooterComponent } from './inquiry-footer.component';

describe('InquiryFooterComponent', () => {
  let component: InquiryFooterComponent;
  let fixture: ComponentFixture<InquiryFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InquiryFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InquiryFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
