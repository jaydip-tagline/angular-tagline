import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyFrontendComponent } from './technology-frontend.component';

describe('TechnologyFrontendComponent', () => {
  let component: TechnologyFrontendComponent;
  let fixture: ComponentFixture<TechnologyFrontendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologyFrontendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologyFrontendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
