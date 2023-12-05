import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoprojectJuradoComponent } from './infoproject-jurado.component';

describe('InfoprojectJuradoComponent', () => {
  let component: InfoprojectJuradoComponent;
  let fixture: ComponentFixture<InfoprojectJuradoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoprojectJuradoComponent]
    });
    fixture = TestBed.createComponent(InfoprojectJuradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
