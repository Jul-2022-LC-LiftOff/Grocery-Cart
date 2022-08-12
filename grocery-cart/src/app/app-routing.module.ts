import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { RecipeComponent } from './recipe/recipe.component';
import { StepComponent } from './step/step.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'recipes', component: RecipeComponent},
  {path: 'steps', component: StepComponent},
  {path: 'ingredients', component: IngredientComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
