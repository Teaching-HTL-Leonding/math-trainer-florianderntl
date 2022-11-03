import { Injectable } from '@angular/core';
import { Settings, Operator } from '../settings';

export interface Exercise {
  number1: number;
  operator: Operator;
  number2: number;
  result: number;
  input?: number;
}

@Injectable({
  providedIn: 'root',
})
export class ExerciseGeneratorService {
  constructor(private settings: Settings) {}

  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  private generateExercise(operator: Operator): Exercise {
    let number1 = -1;
    let number2 = -1;
    let result = -1;

    let max = Math.pow(10, this.settings.nrOfDigits);

    if (operator === Operator.Addition) {
      number1 = this.getRandomNumber(0, max);
      number2 = this.getRandomNumber(0, max);
      result = number1 + number2;
    } else if (operator === Operator.Subtraction) {
      number1 = this.getRandomNumber(0, max);
      number2 = this.getRandomNumber(0, number1 + 1);
      result = number1 - number2;
    } else if (operator === Operator.Multiplication) {
      number1 = this.getRandomNumber(0, max);
      number2 = this.getRandomNumber(0, max);
      result = number1 * number2;
    } else if (operator === Operator.Division) {
      number1 = this.getRandomNumber(4, max);
      let randomNr = this.getRandomNumber(Math.min(10, Math.floor(number1 / 2)), Math.floor(number1 / 2));
      for (let i = randomNr; i >= 1; i--) {
        if (number1 % i == 0) {
          number2 = i;
          break;
        }
      }
      result = number1 / number2;
    }

    return { number1, operator, number2, result };
  }

  public generateExercises(): Exercise[] {
    let exercises: Exercise[] = [];
    let operatorsToUse = this.settings.getOperators();

    for (let i = 0; i < this.settings.nrOfQuestions; i++) {
      let randomNumber = this.getRandomNumber(0, operatorsToUse.length);
      let operator = operatorsToUse[randomNumber];
      exercises.push(this.generateExercise(operator));
    }

    return exercises;
  }
}
