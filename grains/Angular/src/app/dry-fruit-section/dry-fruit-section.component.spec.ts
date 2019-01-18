import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DryFruitSectionComponent } from './dry-fruit-section.component';

describe('DryFruitSectionComponent', () => {
  let component: DryFruitSectionComponent;
  let fixture: ComponentFixture<DryFruitSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DryFruitSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DryFruitSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
