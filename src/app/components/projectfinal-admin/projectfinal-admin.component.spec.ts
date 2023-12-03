import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectfinalAdminComponent } from './projectfinal-admin.component';

describe('ProjectfinalAdminComponent', () => {
  let component: ProjectfinalAdminComponent;
  let fixture: ComponentFixture<ProjectfinalAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectfinalAdminComponent]
    });
    fixture = TestBed.createComponent(ProjectfinalAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
