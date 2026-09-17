import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClassesSection } from './classes-section';

describe('ClassesSection', () => {
  let component: ClassesSection;
  let fixture: ComponentFixture<ClassesSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassesSection],
    }).compileComponents();

    fixture = TestBed.createComponent(ClassesSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
