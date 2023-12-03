import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposedgradeAdminComponent } from './proposedgrade-admin.component';

describe('ProposedgradeAdminComponent', () => {
  let component: ProposedgradeAdminComponent;
  let fixture: ComponentFixture<ProposedgradeAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProposedgradeAdminComponent]
    });
    fixture = TestBed.createComponent(ProposedgradeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
