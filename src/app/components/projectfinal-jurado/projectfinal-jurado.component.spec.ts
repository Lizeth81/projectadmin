import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectfinalJuradoComponent } from './projectfinal-jurado.component';

describe('ProjectfinalJuradoComponent', () => {
  let component: ProjectfinalJuradoComponent;
  let fixture: ComponentFixture<ProjectfinalJuradoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectfinalJuradoComponent]
    });
    fixture = TestBed.createComponent(ProjectfinalJuradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
