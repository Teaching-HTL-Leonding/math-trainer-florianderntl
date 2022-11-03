import { Component } from '@angular/core';
import { Exercise, ExerciseGeneratorService } from './exercise-generator.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent {
  public exercises!: Exercise[];
  public showSolution!: boolean;

  constructor(public exerciseGeneratorService: ExerciseGeneratorService) {
    this.reset();
  }

  public reset() {
    this.exercises = this.exerciseGeneratorService.generateExercises();
    this.showSolution = false;
  }

  public done() {
    this.showSolution = true;
  }
}
