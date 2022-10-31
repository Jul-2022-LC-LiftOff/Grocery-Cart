import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient/ingredient.component';
import { Step } from '../step/step.component';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { RecipeService } from '../recipe.service';
import { ListItemService } from '../list-item.service';



export class Recipe {
  constructor(
    public id: number,
    public name: string,
    public ingredients: Ingredient[],
    public steps: Step[],
    public summary: string,
    public link: string,
    public prepTime: string,
    public cookTime: string,
    public servings: string,
    public calories: string,
    public nutrition: string,
    
  ) {
  }
}

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipes: Recipe[] = [];
  closeResult: string | undefined;
  deleteId: number = 0;
  idDisplay: number = 0;
  recipeNameDisplay: string | undefined;
  ingredientsDisplay: Ingredient[] = [];
  stepsDisplay: Step[] = [];
  summaryDisplay: string | undefined;
  prepTimeDisplay: string | undefined;
  cookTimeDisplay: string | undefined;
  servingsDisplay: string | undefined;
  caloriesDisplay: string | undefined;
  nutritionDisplay: string | undefined;


  addList: string[] = [];

    

  constructor(private httpClient: HttpClient, private modalService: NgbModal, private recipeService: RecipeService, private listItemService: ListItemService) { }

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes(){
    this.recipeService.getRecipes().subscribe(
      response => {
        console.log(response);
        this.recipes = response;
      }
    );
  }

  
  open(content: any) {
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

  openDetails(targetModal: any, recipe: Recipe) {
    this.modalService.open(targetModal, {
     centered: true,
     backdrop: 'static',
     size: 'lg'
   });
   this.idDisplay = recipe.id;
   this.recipeNameDisplay = recipe.name;
   this.ingredientsDisplay = recipe.ingredients;
   this.stepsDisplay = recipe.steps;
   this.summaryDisplay = recipe.summary;
   this.prepTimeDisplay = recipe.prepTime;
   this.cookTimeDisplay = recipe.cookTime;
   this.servingsDisplay = recipe.servings;
   this.caloriesDisplay = recipe.calories;
   this.nutritionDisplay = recipe.nutrition;
 }

  openDelete(targetModal: any, recipe: Recipe) {
    this.deleteId = recipe.id;
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
  }

  onDelete() {
    this.recipeService.deleteRecipe(this.deleteId).subscribe((results) => {
        this.ngOnInit();
        this.modalService.dismissAll();
      });
  }
  
  openAdd(targetModal: any, recipe: Recipe) {
    this.addList.splice(0,this.addList.length);
    console.log(this.addList);
    for(let i = 0; i < recipe.ingredients.length; i++) {
      this.addList.push(recipe.ingredients[i].ingredient);
    }
    console.log(this.addList);
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
  }

  onAdd() {
    this.listItemService.addListItems(this.addList).subscribe((results) => {
      this.ngOnInit();
      this.modalService.dismissAll();
    });
  }
}
