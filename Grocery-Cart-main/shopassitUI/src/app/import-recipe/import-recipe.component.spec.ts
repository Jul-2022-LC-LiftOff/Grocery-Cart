import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportRecipeComponent } from './import-recipe.component';

describe('ImportRecipeComponent', () => {
  let component: ImportRecipeComponent;
  let fixture: ComponentFixture<ImportRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportRecipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
