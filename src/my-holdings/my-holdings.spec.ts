import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHoldings } from './my-holdings';

describe('MyHoldings', () => {
  let component: MyHoldings;
  let fixture: ComponentFixture<MyHoldings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyHoldings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyHoldings);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
