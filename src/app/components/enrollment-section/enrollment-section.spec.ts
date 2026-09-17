import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnrollmentSection } from './enrollment-section';

describe('EnrollmentSection', () => {
  let component: EnrollmentSection;
  let fixture: ComponentFixture<EnrollmentSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnrollmentSection],
    }).compileComponents();

    fixture = TestBed.createComponent(EnrollmentSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
