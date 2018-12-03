import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PushNotification2Component } from './push-notification2.component';

describe('PushNotification2Component', () => {
  let component: PushNotification2Component;
  let fixture: ComponentFixture<PushNotification2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PushNotification2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PushNotification2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
