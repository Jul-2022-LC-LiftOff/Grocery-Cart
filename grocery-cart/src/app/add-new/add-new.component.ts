import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient/ingredient.component';
import { Step } from '../step/step.component';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

export class Recipe {
  constructor(
    public id: number,
    public name: string,
    public ingredients: Ingredient[],
    public steps: Step[]
  ) {
  }
}

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {

  closeResult: string | undefined;
  ingredients: Ingredient[] = [];
  steps: Step[] = [];
  recipesFromDb: Recipe[] = [];
  ingredientsFromDb: Ingredient[] = [];
  stepsFromDb: Step[] = [];



  constructor(private httpClient: HttpClient, private modalService: NgbModal) { }

  ngOnInit() {
    this.getRecipes();
    this.getIngredients();
    this.getSteps();
  }

  addIngredient(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  addStep(content: any) {
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

  onAddIngredient(f: NgForm) {
    this.ingredients.push(f.value);
    const url = 'http://localhost:8080/ingredientEntries/addnew';
    this.httpClient.post(url, f.value)
      .subscribe((result) => {
        this.ngOnInit(); //reload the table
      });
    this.modalService.dismissAll(); //dismiss the modal
    console.log(this.ingredients);
  }

  onAddStep(f: NgForm) {
    this.steps.push(f.value);
    const url = 'http://localhost:8080/steps/addnew';
    this.httpClient.post(url, f.value)
      .subscribe((result) => {
        this.ngOnInit(); //reload the table
      });
    this.modalService.dismissAll(); //dismiss the modal
    console.log(this.steps);
  }

  
  getRecipes(){
    this.httpClient.get<any>('http://localhost:8080/recipes').subscribe(
      response => {
        //console.log(response);
        this.recipesFromDb = response;
      }
    );
  }
  
  getIngredients(){
    this.httpClient.get<any>('http://localhost:8080/ingredientEntries').subscribe(
      response => {
        //console.log(response);
        this.ingredientsFromDb = response;
      }
    );
  }

  getSteps(){
    this.httpClient.get<any>('http://localhost:8080/steps').subscribe(
      response => {
        //console.log(response);
        this.stepsFromDb = response;
      }
    );
  }
  


  onSubmit(f: NgForm) {
    
    const url = 'http://localhost:8080/recipes/addnew';
    console.log(f.value);
    this.httpClient.post(url, f.value)
      .subscribe((result) => {
        this.ngOnInit(); //reload the table
      });

    console.log("recipes", this.recipesFromDb);
    console.log("ingredients", this.ingredientsFromDb);
    console.log("steps", this.stepsFromDb);

    let recipeId: number = this.recipesFromDb[this.recipesFromDb.length-1].id;
    console.log(recipeId);
    
    //similar to recipeId, get all ingredient ids and step ids

    let ingredientIds: number[];

      //for each ingredient in ingredients[], post a RecipeIngredientEntryDto

    let stepIds: number[];
      //for each step in steps[], post a RecipeIngredientEntryDto


  }
}
