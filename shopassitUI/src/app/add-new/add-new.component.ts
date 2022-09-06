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
  ingredients: Ingredient[] = []; //for adding Ingredients to Db
  steps: Step[] = []; //for adding Steps to Db
  recipesFromDb: Recipe[] = []; //for getting Recipes from Db
  ingredientsFromDb: Ingredient[] = []; //for getting Ingredients from Db
  stepsFromDb: Step[] = []; //for getting Steps from Db




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
    this.recipeService.addRecipe(f.value).subscribe((result) => {
        this.ngOnInit(); //reload the table
      });
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
        this.recipeService.addIngredient(f.value).subscribe((result) => {
          this.ngOnInit(); //reload the table
        });
            
    }
    this.modalService.dismissAll(); //dismiss the modal
    //console.log(this.ingredients);
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
        this.recipeService.addStep(f.value).subscribe((result) => {
          this.ngOnInit(); //reload the table
        });
    }
    
    this.modalService.dismissAll(); //dismiss the modal
    //console.log(this.steps);
  }

  onSubmit(f: NgForm) {
    
    let recipeId: number = this.recipesFromDb[this.recipesFromDb.length-1].id;
    console.log("Recipe Id", recipeId);
    
    //similar to recipeId, get all ingredient ids in their own array:
    let ingredientIds: number[] = [];
    for(let i = 0; i < this.ingredientsFromDb.length; i++) {
      for(let j = 0; j < this.ingredients.length; j++) {
        if(this.ingredientsFromDb[i].amount == this.ingredients[j].amount && this.ingredientsFromDb[i].unit == this.ingredients[j].unit && this.ingredientsFromDb[i].ingredient == this.ingredients[j].ingredient) {
            ingredientIds.push(this.ingredientsFromDb[i].id);
        }
      }
    }
  
    //similar to recipeId, get all step ids in their own array:
    let stepIds: number[] = [];
    for (let i = 0; i < this.stepsFromDb.length; i++) {
      for (let j = 0; j < this.steps.length; j++) {
        if(this.stepsFromDb[i].step == this.steps[j].step) {
            stepIds.push(this.stepsFromDb[i].id);
        }
      }
    }

    console.log("ingredients", ingredientIds, ingredientIds.length);
    console.log("steps", stepIds, stepIds.length);
    

    //TODO: for each ingredient in ingredients[], post a RecipeIngredientDto to database
    for (let i = 0; i < ingredientIds.length; i++) {
      let ingredientId: number = ingredientIds[i];
      this.recipeService.addRecipeIngredient(recipeId, ingredientId).subscribe();
      console.log("Ingredient Id:", [i], ",", ingredientId);
    }

    //TODO: for each step in steps[], post a RecipeStepDto to database
    for (let i = 0; i < stepIds.length; i++) {
      let stepId: number = stepIds[i];
      this.recipeService.addRecipeStep(recipeId, stepId).subscribe();
      console.log("Step Id:", [i], ",", stepId);
    }
    
    //TODO: reload to recipe page
    this.router.navigate(['/recipes']);


  }
  
}