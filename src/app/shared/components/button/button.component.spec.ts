// angular
import { ComponentFixture, TestBed } from '@angular/core/testing';

// components
import { ButtonComponent } from '@shared/components/button/button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        // components
        ButtonComponent
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create ButtonComponent', () => {
    expect(component).toBeTruthy();
  });
});
