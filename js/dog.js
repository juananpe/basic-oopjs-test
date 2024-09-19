import { Animal } from "./animal.js";

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this._breed = breed;
  }

  speak() {
    console.log("Woof!");
  }

  get breed() {
    return this._breed;
  }
}

export { Dog };
