import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposedgradeComponent } from './proposedgrade.component';

describe('ProposedgradeComponent', () => {
  let component: ProposedgradeComponent;
  let fixture: ComponentFixture<ProposedgradeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProposedgradeComponent]
    });
    fixture = TestBed.createComponent(ProposedgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
