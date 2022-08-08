import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperenciaLaboralComponent } from './experencia-laboral.component';

describe('ExperenciaLaboralComponent', () => {
  let component: ExperenciaLaboralComponent;
  let fixture: ComponentFixture<ExperenciaLaboralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperenciaLaboralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperenciaLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
