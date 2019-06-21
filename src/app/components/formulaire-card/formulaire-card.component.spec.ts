import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireCardComponent } from './formulaire-card.component';

describe('FormulaireCardComponent', () => {
  let component: FormulaireCardComponent;
  let fixture: ComponentFixture<FormulaireCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaireCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
