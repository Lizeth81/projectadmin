import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoanteproyectoDirectorComponent } from './infoanteproyecto-director.component';

describe('InfoanteproyectoDirectorComponent', () => {
  let component: InfoanteproyectoDirectorComponent;
  let fixture: ComponentFixture<InfoanteproyectoDirectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoanteproyectoDirectorComponent]
    });
    fixture = TestBed.createComponent(InfoanteproyectoDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
