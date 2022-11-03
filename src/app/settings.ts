import { Injectable } from "@angular/core";

export enum Operator {
  Addition = '+',
  Subtraction = '-',
  Multiplication = '*',
  Division = '/'
}

@Injectable({
  providedIn: 'root'
})
export class Settings {
  public nrOfDigits: number;
  public nrOfQuestions: number;
  public operators: boolean[];

  constructor() {
    this.nrOfDigits = 1;
    this.nrOfQuestions = 10;
    this.operators = Array(Object.keys(Operator).length);
    this.operators.fill(true);
  }

  public getOperators(): Operator[] {
    let availableOperators: Operator[] = Object.values(Operator).map(
      (value) => value as Operator
    );
    let operators: Operator[] = [];

    for (let i = 0; i < availableOperators.length; i++) {
      if (this.operators[i]) {
        operators.push(availableOperators[i]);
      }
    }
    return operators;
  }
}
