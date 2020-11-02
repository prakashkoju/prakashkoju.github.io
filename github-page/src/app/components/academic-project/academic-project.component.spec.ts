import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicProjectComponent } from './academic-project.component';

describe('AcademicProjectComponent', () => {
  let component: AcademicProjectComponent;
  let fixture: ComponentFixture<AcademicProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
