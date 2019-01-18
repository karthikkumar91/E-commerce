import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavicationComponent } from './side-navication.component';

describe('SideNavicationComponent', () => {
  let component: SideNavicationComponent;
  let fixture: ComponentFixture<SideNavicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
