import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightofferServiceComponent } from './rightoffer-service.component';

describe('RightofferServiceComponent', () => {
  let component: RightofferServiceComponent;
  let fixture: ComponentFixture<RightofferServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightofferServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightofferServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
