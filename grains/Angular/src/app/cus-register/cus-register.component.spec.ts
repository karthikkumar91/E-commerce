import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CusRegisterComponent } from './cus-register.component';

describe('CusRegisterComponent', () => {
  let component: CusRegisterComponent;
  let fixture: ComponentFixture<CusRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CusRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CusRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
