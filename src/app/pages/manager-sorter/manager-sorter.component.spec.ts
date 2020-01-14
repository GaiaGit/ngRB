import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerSorterComponent } from './manager-sorter.component';

describe('ManagerSorterComponent', () => {
  let component: ManagerSorterComponent;
  let fixture: ComponentFixture<ManagerSorterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerSorterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerSorterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
