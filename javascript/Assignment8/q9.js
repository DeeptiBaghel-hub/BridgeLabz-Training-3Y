'use strict';

class FitnessAnalytics {
  constructor(workouts) {
    if (!Array.isArray(workouts) || workouts.length === 0) {
      throw new Error('Workout dataset must contain at least one user.');
    }

    this.workouts = workouts;
  }

  getActiveUsers() {
    return this.workouts.filter((workout) => workout.steps > 7000);
  }

  getAverageCalories() {
    const totalCalories = this.workouts.reduce(
      (total, workout) => total + workout.calories,
      0
    );
    return totalCalories / this.workouts.length;
  }

  getUserSummary() {
    return this.workouts.map(
      (workout) => `${workout.user} walked ${workout.steps} steps and burned ${workout.calories} calories.`
    );
  }
}

const workouts = [
  { user: 'A', steps: 8000, calories: 300 },
  { user: 'B', steps: 12000, calories: 500 },
  { user: 'C', steps: 4000, calories: 200 }
];
const analytics = new FitnessAnalytics(workouts);

console.log('Q9 - Fitness app analytics');
console.log('Active users:', analytics.getActiveUsers().map((workout) => workout.user));
console.log(`Average calories: ${analytics.getAverageCalories().toFixed(2)}`);
analytics.getUserSummary().forEach((summary) => console.log(summary));
