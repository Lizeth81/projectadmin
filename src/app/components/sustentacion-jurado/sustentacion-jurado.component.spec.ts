import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SustentacionJuradoComponent } from './sustentacion-jurado.component';

describe('SustentacionJuradoComponent', () => {
  let component: SustentacionJuradoComponent;
  let fixture: ComponentFixture<SustentacionJuradoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SustentacionJuradoComponent]
    });
    fixture = TestBed.createComponent(SustentacionJuradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
