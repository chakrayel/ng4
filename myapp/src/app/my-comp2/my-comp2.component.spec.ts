import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2Component } from './my-comp2.component';

describe('MyComp2Component', () => {
  let component: MyComp2Component;
  let fixture: ComponentFixture<MyComp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
