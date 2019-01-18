import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutsSectionComponent } from './nuts-section.component';

describe('NutsSectionComponent', () => {
  let component: NutsSectionComponent;
  let fixture: ComponentFixture<NutsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
