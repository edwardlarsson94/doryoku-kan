import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValuesSection } from './values-section';

describe('ValuesSection', () => {
  let component: ValuesSection;
  let fixture: ComponentFixture<ValuesSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValuesSection],
    }).compileComponents();

    fixture = TestBed.createComponent(ValuesSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
