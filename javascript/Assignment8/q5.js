'use strict';

class User {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
  }
}

class Driver extends User {
  constructor(name, rating, vehicleMake, vehicleModel) {
    super(name, rating);
    this.vehicleMake = vehicleMake;
    this.vehicleModel = vehicleModel;
  }
}

class Trip {
  constructor(fromLocation, toLocation, distance) {
    this.fromLocation = fromLocation;
    this.toLocation = toLocation;
    this.distance = distance;
  }

  calculateFare() {
    if (!Number.isFinite(this.distance) || this.distance < 0) {
      throw new Error('Trip distance must be a non-negative number.');
    }

    const ratePerKilometer = 2.5;
    return this.distance * ratePerKilometer;
  }
}

const driver = new Driver('Kai', 4.9, 'Toyota', 'Prius');
const trips = [
  new Trip('Central Station', 'City Park', 12),
  new Trip('City Park', 'Airport', -4),
  new Trip('Airport', 'Hotel', undefined)
];

console.log('Q5 - Ride-sharing application');
console.log(`Driver: ${driver.name} (${driver.vehicleMake} ${driver.vehicleModel}), rating ${driver.rating}`);
trips.forEach((trip) => {
  try {
    console.log(
      `${trip.fromLocation} to ${trip.toLocation}: $${trip.calculateFare().toFixed(2)}`
    );
  } catch (error) {
    console.log(`Unable to calculate fare: ${error.message}`);
  }
});
