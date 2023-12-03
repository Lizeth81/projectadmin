import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoprojectDirectorComponent } from './infoproject-director.component';

describe('InfoprojectDirectorComponent', () => {
  let component: InfoprojectDirectorComponent;
  let fixture: ComponentFixture<InfoprojectDirectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoprojectDirectorComponent]
    });
    fixture = TestBed.createComponent(InfoprojectDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
