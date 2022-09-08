import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient/ingredient.component';
import { Step } from '../step/step.component';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { RecipeService } from '../recipe.service';

export class Recipe {
  constructor(
    public id: number,
    public name: string,
    public ingredients: Ingredient[],
    public steps: Step[],
    public link: string
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

  constructor(private httpClient: HttpClient, private modalService: NgbModal, private recipeService: RecipeService) { }

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
  

}