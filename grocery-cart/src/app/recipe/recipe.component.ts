import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient/ingredient.component';
import { Step } from '../step/step.component';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

export class Recipe {
  constructor(
    public id: number,
    public name: string,
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

  constructor(private httpClient: HttpClient, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes(){
    this.httpClient.get<any>('http://localhost:8080/recipes').subscribe(
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

}
