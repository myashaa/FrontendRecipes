import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupSwitchComponent } from './popup-switch.component';

describe('PopupSwitchComponent', () => {
  let component: PopupSwitchComponent;
  let fixture: ComponentFixture<PopupSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
