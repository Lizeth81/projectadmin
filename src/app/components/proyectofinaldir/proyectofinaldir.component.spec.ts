import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectofinaldirComponent } from './proyectofinaldir.component';

describe('ProyectofinaldirComponent', () => {
  let component: ProyectofinaldirComponent;
  let fixture: ComponentFixture<ProyectofinaldirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProyectofinaldirComponent]
    });
    fixture = TestBed.createComponent(ProyectofinaldirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
