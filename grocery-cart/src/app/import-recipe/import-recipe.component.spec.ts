import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeComponent } from '../recipe/recipe.component';

import { ImportRecipeComponent } from './import-recipe.component';

describe('ImportRecipeComponent', () => {
  let component: ImportRecipeComponent;
  let fixture: ComponentFixture<ImportRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
