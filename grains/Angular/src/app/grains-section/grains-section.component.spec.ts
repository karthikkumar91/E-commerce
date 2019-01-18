import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrainsSectionComponent } from './grains-section.component';

describe('GrainsSectionComponent', () => {
  let component: GrainsSectionComponent;
  let fixture: ComponentFixture<GrainsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrainsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrainsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
