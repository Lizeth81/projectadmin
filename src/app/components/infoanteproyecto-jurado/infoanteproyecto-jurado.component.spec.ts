import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoanteproyectoJuradoComponent } from './infoanteproyecto-jurado.component';

describe('InfoanteproyectoJuradoComponent', () => {
  let component: InfoanteproyectoJuradoComponent;
  let fixture: ComponentFixture<InfoanteproyectoJuradoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoanteproyectoJuradoComponent]
    });
    fixture = TestBed.createComponent(InfoanteproyectoJuradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
