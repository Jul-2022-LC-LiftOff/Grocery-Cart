import { Component, OnInit } from '@angular/core';

export class Step {
  constructor(
    public id: number,
    public step: string
  ) {
  }
}

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}