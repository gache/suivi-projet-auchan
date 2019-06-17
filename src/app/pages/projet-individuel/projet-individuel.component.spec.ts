import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetIndividuelComponent } from './projet-individuel.component';

describe('ProjetIndividuelComponent', () => {
  let component: ProjetIndividuelComponent;
  let fixture: ComponentFixture<ProjetIndividuelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetIndividuelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetIndividuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
