import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeManagerPageComponent } from './recipe-manager-page.component';

describe('RecipeManagerPageComponent', () => {
  let component: RecipeManagerPageComponent;
  let fixture: ComponentFixture<RecipeManagerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipeManagerPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecipeManagerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
