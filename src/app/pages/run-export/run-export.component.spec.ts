import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunExportComponent } from './run-export.component';

describe('RunExportComponent', () => {
  let component: RunExportComponent;
  let fixture: ComponentFixture<RunExportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunExportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
