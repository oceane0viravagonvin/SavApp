import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCalculatorPageComponent } from './recipe-calculator-page.component';

describe('RecipeCalculatorPageComponent', () => {
  let component: RecipeCalculatorPageComponent;
  let fixture: ComponentFixture<RecipeCalculatorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipeCalculatorPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecipeCalculatorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
