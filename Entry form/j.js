// Definition
// Polymorphism as one of the tenets of Object-Oriented Programming (OOP) is the
// practice of designing objects to share behaviors and to be able to override
// shared behaviors with specific ones. Polymorphism takes advantage of
// inheritance in order to make this happen.
// Example
//     Auto
//     /    \
//    Car   Truck
//   /   \   /   \
// Ford KIA TATA ***
// Autos require a make, model, and year, and a drive() method
class Auto {
    constructor(make, model, year, size) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.size = size;
    }
    sound() {
      console.log("Vroom Vroom!");
    }
  }
  // Cars are specifically Autos that are generally smaller and more efficient.
  class Car extends Auto {
    constructor(make, model, year) {
      super(make, model, year);
      this.efficient = true;
      this.size = "smaller";
    }
  }
  // Trucks are larger and less efficient but have a bed to put things in.
  class Truck extends Auto {
    constructor(make, model, year) {
      super(make, model, year);
      this.efficient = false;
      this.size = "larger";
      this.bed = {};
    }
    sound() {
      console.log("Deafening");
    }
    bed(inOut, item) {
      if (inOut === "in") {
        this.bed[item] = item;
      } else if (inOut === "out") {
        const removed = this.bed[item];
        delete this.bed[item];
        return removed;
      }
    }
  }
  // Output of the polymorphic classes
  // Inherit from car and override the sound method
  const vehicle1 = new Car('Ford', 'Fiesta', 2009);
  console.log("This " + vehicle1.make + " " + vehicle1.model + " car of year " + 
  vehicle1.year + " is of " + vehicle1.size + " size.");
  console.log("It's engine sound is: ");
  vehicle1.sound();
  // Inherit from truck and override the sound method
  const vehicle2 = new Truck("TATA", "Lorry", 1970);
  console.log(
    `This ${vehicle2.make} ${vehicle2.model} truck of year ${vehicle2.year} is of ${vehicle2.size} size.`
  );
  console.log("It's engine sound is: ");
  vehicle2.sound();