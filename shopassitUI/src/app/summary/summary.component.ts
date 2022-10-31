import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe/recipe.component';

export class Summary {
  constructor(
    public id: number,
    public summary: string,
    public recipes: Recipe[]
  ) {
  }
}

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
