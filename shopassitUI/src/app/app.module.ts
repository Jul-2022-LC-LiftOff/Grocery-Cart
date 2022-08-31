import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { RecipeComponent } from './recipe/recipe.component';
import { AddNewComponent } from './add-new/add-new.component';
import { ImportRecipeComponent } from './import-recipe/import-recipe.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { StepComponent } from './step/step.component';
import { ListComponent } from './list/list.component';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipeComponent,
    AddNewComponent,
    ImportRecipeComponent,
    IngredientComponent,
    StepComponent,
    ListComponent,
    FaqComponent
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
