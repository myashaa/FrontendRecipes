import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAuthorizationComponent } from './popup-authorization.component';

describe('PopupAuthorizationComponent', () => {
  let component: PopupAuthorizationComponent;
  let fixture: ComponentFixture<PopupAuthorizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupAuthorizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupAuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
