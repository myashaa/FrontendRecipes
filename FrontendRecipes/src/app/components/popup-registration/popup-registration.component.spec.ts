import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupRegistrationComponent } from './popup-registration.component';

describe('PopupRegistrationComponent', () => {
  let component: PopupRegistrationComponent;
  let fixture: ComponentFixture<PopupRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
