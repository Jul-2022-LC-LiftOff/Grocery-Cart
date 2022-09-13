import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient/ingredient.component';
import { Step } from '../step/step.component';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Recipe } from '../recipe/recipe.component';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {

  closeResult: string | undefined;
  recipeName: Recipe | undefined; //for adding Recipe to Db
  ingredients: Ingredient[] = []; //for adding Ingredients to Db (will not have id)
  steps: Step[] = []; //for adding Steps to Db (will not have id)
  recipesFromDb: Recipe[] = []; //for getting Recipes from Db
  ingredientsFromDb: Ingredient[] = []; //for getting Ingredients from Db
  stepsFromDb: Step[] = []; //for getting Steps from Db

  ingredientsForRecipe: Ingredient[] = []; //for adding Ingredients to Recipe
  stepsForRecipe: Step[] = []; //for adding Steps to Recipe

  recipeId: number = 0;

  deleteId: number = 0;

  constructor(private httpClient: HttpClient, private modalService: NgbModal, private router: Router, private recipeService: RecipeService) { }

  ngOnInit() {
    this.getRecipes();
    this.getIngredients();
    this.getSteps();
  }

  getRecipes(){
    this.recipeService.getRecipes().subscribe(response => {
        this.recipesFromDb = response;
      }
    );
  }
  
  getIngredients(){
    this.recipeService.getIngredients().subscribe(response => {
        this.ingredientsFromDb = response;
      }
    );
  }

  getSteps(){
    this.recipeService.getSteps().subscribe(response => {
        this.stepsFromDb = response;
      }
    );
  }

  addRecipeName(content: any) {
    if (this.recipeName == undefined) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    } else {
      //do nothing
    }
  }

  addIngredientOrStep(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onAddRecipeName(f: NgForm) {
    this.recipeName = f.value;
    this.recipeService.addRecipe(f.value).subscribe(response => {
      this.ngOnInit();
    }
  );
    this.modalService.dismissAll(); //dismiss the modal
    //console.log(this.recipeName);
  }

  onAddIngredient(f: NgForm) {
    this.ingredients.push(f.value);
    let isIngredientInDatabase : boolean = false;

    //TODO if f.value already exists in the database, don't add to db. Otherwise, add to db.
    for(let i = 0; i < this.ingredientsFromDb.length; i++){
      if(this.ingredientsFromDb[i].amount == f.value.amount && this.ingredientsFromDb[i].unit == f.value.unit && this.ingredientsFromDb[i].ingredient == f.value.ingredient) {
        isIngredientInDatabase = true;
      }
    }

    if(isIngredientInDatabase == true) {
      //do nothing
    } else {
        this.recipeService.addIngredient(f.value).subscribe(response => {
          this.ngOnInit();
        }
      );    
    }
    this.modalService.dismissAll(); //dismiss the modal
  }

  onAddStep(f: NgForm) {
    this.steps.push(f.value);
    let isStepInDatabase : boolean = false;

    //TODO if f.value already exists in the database, don't add to db. Otherwise, add to db.
    for(let i = 0; i < this.stepsFromDb.length; i++){
      if(this.stepsFromDb[i].step == f.value.step) {
        isStepInDatabase = true;
      }
    }

    if(isStepInDatabase == true) {
      //do nothing
    } else {
        this.recipeService.addStep(f.value).subscribe(response => {
          this.ngOnInit();
        }
      );
    }
    
    this.modalService.dismissAll(); //dismiss the modal
    //console.log(this.steps);
  }

  convertIngredients() {
    for (let i = 0; i < this.ingredientsFromDb.length; i++){
      for (let j = 0; j < this.ingredients.length; j++)
        if(this.ingredientsFromDb[i].amount == this.ingredients[j].amount && this.ingredientsFromDb[i].unit == this.ingredients[j].unit && this.ingredientsFromDb[i].ingredient == this.ingredients[j].ingredient) {
          this.ingredientsForRecipe.push(this.ingredientsFromDb[i]);
        }
    }
  }

  convertSteps() {
    for (let i = 0; i < this.stepsFromDb.length; i++){
      for (let j = 0; j < this.steps.length; j++)
        if(this.stepsFromDb[i].step == this.steps[j].step) {
          this.stepsForRecipe.push(this.stepsFromDb[i]);
        }
    }
  }

  getRecipeId() {
    this.recipeId = this.recipesFromDb[this.recipesFromDb.length-1].id;
  }

  onSubmit() {
    this.getRecipeId();
    console.log("Recipe Id", this.recipeId);
    this.convertIngredients();
    this.convertSteps();
    console.log(this.ingredientsForRecipe);
    console.log(this.stepsForRecipe);

    //TODO: for each ingredient in ingredients[], post a RecipeIngredientDto to database
    this.recipeService.addRecipeIngredient(this.recipeId, this.ingredientsForRecipe).subscribe();

    //TODO: for each step in steps[], post a RecipeStepDto to database
    this.recipeService.addRecipeStep(this.recipeId, this.stepsForRecipe).subscribe();

    this.ngOnInit();

    //TODO: reload to recipe page
    this.router.navigate(['/home']);
  }

  openRemoveIngredient(targetModal: any, ingredient: Ingredient) {
    for (let i = 0; i < this.ingredients.length; i++) {
      if(this.ingredients[i].amount == ingredient.amount && this.ingredients[i].unit == ingredient.unit && this.ingredients[i].ingredient == ingredient.ingredient) {
        this.deleteId = i;
      }
    }
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
  }

  onRemoveIngredient() {
    this.ingredients.splice(this.deleteId,1);
    this.ngOnInit();
    this.modalService.dismissAll();
  }

  openRemoveStep(targetModal: any, step: Step) {
    for (let i = 0; i < this.steps.length; i++) {
      if(this.steps[i].step == step.step) {
        this.deleteId = i;
      }
    }
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
  }

  onRemoveStep() {
    this.steps.splice(this.deleteId,1);
    this.ngOnInit();
    this.modalService.dismissAll();
  }
}