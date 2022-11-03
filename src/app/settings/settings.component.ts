import { Component, Inject, OnInit } from '@angular/core';
import { Operator, Settings } from '../settings';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  public nrOfDigitsOptions: number[];
  public nrOfQuestionsOptions: number[];
  public operatorOptions: string[];

  constructor(public settings: Settings) {
    this.nrOfDigitsOptions = [1, 2, 3, 4];
    this.nrOfQuestionsOptions = Array.from(Array(16).keys(), key => key + 5);
    this.operatorOptions = Object.keys(Operator);
  }

}
