import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeAlerts } from './customize-alerts';

describe('CustomizeAlerts', () => {
  let component: CustomizeAlerts;
  let fixture: ComponentFixture<CustomizeAlerts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomizeAlerts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomizeAlerts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
