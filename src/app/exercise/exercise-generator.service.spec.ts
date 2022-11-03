import { TestBed } from '@angular/core/testing';
import { Operator, Settings } from '../settings';

import { ExerciseGeneratorService } from './exercise-generator.service';

describe('ExerciseGeneratorService', () => {
  let service: ExerciseGeneratorService;
  let settings: Settings;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExerciseGeneratorService);
    settings = TestBed.inject(Settings);
  });

  it('should generate 20 exercises', () => {
    settings.nrOfQuestions = 20;
    expect(service.generateExercises().length).toBe(20);
  });

  it('should generate exercises with numbers of maximum of 2 digits', () => {
    settings.nrOfDigits = 2;
    let exercises = service.generateExercises();
    for (let exercise of exercises) {
      expect(exercise.number1.toString().length).toBeLessThanOrEqual(2);
      expect(exercise.number2.toString().length).toBeLessThanOrEqual(2);
    }
  });

  it('should only generate exercises with a "+" operator', () => {
    let expectedOperator = Operator.Addition;

    let operators = Object.values(Operator);
    for (let i = 0; i < operators.length; i++) {
      if (operators[i] !== expectedOperator) {
        settings.operators[i] = false;
      }
    }

    let exercises = service.generateExercises();
    for (let exercise of exercises) {
      expect(exercise.operator).toBe(Operator.Addition);
    }
  });
});
