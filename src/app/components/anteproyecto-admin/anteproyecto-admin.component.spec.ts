import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnteproyectoAdminComponent } from './anteproyecto-admin.component';

describe('AnteproyectoAdminComponent', () => {
  let component: AnteproyectoAdminComponent;
  let fixture: ComponentFixture<AnteproyectoAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnteproyectoAdminComponent]
    });
    fixture = TestBed.createComponent(AnteproyectoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
