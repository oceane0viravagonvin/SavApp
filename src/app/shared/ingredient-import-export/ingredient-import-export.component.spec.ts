import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientImportExportComponent } from './ingredient-import-export.component';

describe('IngredientImportExportComponent', () => {
  let component: IngredientImportExportComponent;
  let fixture: ComponentFixture<IngredientImportExportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IngredientImportExportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IngredientImportExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
