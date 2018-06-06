import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaingredientesComponent } from './tablaingredientes.component';

describe('TablaingredientesComponent', () => {
  let component: TablaingredientesComponent;
  let fixture: ComponentFixture<TablaingredientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaingredientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaingredientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
