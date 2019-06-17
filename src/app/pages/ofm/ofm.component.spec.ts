import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfmComponent } from './ofm.component';

describe('OfmComponent', () => {
  let component: OfmComponent;
  let fixture: ComponentFixture<OfmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
