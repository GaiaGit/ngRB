import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerListItemComponent } from './manager-list-item.component';

describe('ManagerListItemComponent', () => {
  let component: ManagerListItemComponent;
  let fixture: ComponentFixture<ManagerListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
