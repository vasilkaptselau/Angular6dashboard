import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrderTableComponent } from './new-order-table.component';

describe('NewOrderTableComponent', () => {
  let component: NewOrderTableComponent;
  let fixture: ComponentFixture<NewOrderTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOrderTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOrderTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
