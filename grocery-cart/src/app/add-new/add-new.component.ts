import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient/ingredient.component';
import { Step } from '../step/step.component';

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
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
