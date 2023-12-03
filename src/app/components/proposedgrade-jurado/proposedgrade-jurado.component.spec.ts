import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposedgradeJuradoComponent } from './proposedgrade-jurado.component';

describe('ProposedgradeJuradoComponent', () => {
  let component: ProposedgradeJuradoComponent;
  let fixture: ComponentFixture<ProposedgradeJuradoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProposedgradeJuradoComponent]
    });
    fixture = TestBed.createComponent(ProposedgradeJuradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
