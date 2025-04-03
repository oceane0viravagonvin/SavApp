import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalIngredientPickerComponent } from './modal-ingredient-picker.component';

describe('ModalIngredientPickerComponent', () => {
  let component: ModalIngredientPickerComponent;
  let fixture: ComponentFixture<ModalIngredientPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalIngredientPickerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalIngredientPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
