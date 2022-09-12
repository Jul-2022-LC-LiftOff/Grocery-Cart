import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewComponent } from './add-new/add-new.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { ImportRecipeComponent } from './import-recipe/import-recipe.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { ListComponent } from './list/list.component';
import { RecipeComponent } from './recipe/recipe.component';
import { StepComponent } from './step/step.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'recipes', component: RecipeComponent},
  {path: 'steps', component: StepComponent},
  {path: 'ingredients', component: IngredientComponent},
  {path: 'add-new', component: AddNewComponent},
  {path: 'import-recipe', component: ImportRecipeComponent},
  {path: 'list', component: ListComponent},
  {path: 'faq', component: FaqComponent},
  {path: '', component: HomeComponent},
  {path: 'create-user', component: CreateUserComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'user', component: BoardUserComponent},
  {path: 'mod', component: BoardModeratorComponent},
  {path: 'admin', component: BoardAdminComponent},
  //{path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
