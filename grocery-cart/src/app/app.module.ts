import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RecipeComponent } from './recipe/recipe.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IngredientComponent } from './ingredient/ingredient.component';
import { StepComponent } from './step/step.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipeComponent,
    IngredientComponent,
    StepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
