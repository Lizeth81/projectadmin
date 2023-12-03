import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnteproyectoJuradoComponent } from './anteproyecto-jurado.component';

describe('AnteproyectoJuradoComponent', () => {
  let component: AnteproyectoJuradoComponent;
  let fixture: ComponentFixture<AnteproyectoJuradoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnteproyectoJuradoComponent]
    });
    fixture = TestBed.createComponent(AnteproyectoJuradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
