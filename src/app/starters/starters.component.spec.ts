import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STARTERSComponent } from './starters.component';

describe('STARTERSComponent', () => {
  let component: STARTERSComponent;
  let fixture: ComponentFixture<STARTERSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ STARTERSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(STARTERSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
