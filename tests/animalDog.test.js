import { Animal } from "../js/animal.js";
import { Dog } from "../js/dog.js";

describe('Animal', () => {
  test('should create an Animal instance with a name', () => {
    const animal = new Animal('Generic Animal');
    expect(animal.name).toBe('Generic Animal');
  });

  test('should make a noise', () => {
    const animal = new Animal('Generic Animal');
    console.log = jest.fn();
    animal.speak();
    expect(console.log).toHaveBeenCalledWith('Generic Animal makes a noise.');
  });
});

describe('Dog', () => {
  test('should create a Dog instance with a name and breed', () => {
    const dog = new Dog('Rex', 'German Shepherd');
    expect(dog.name).toBe('Rex');
    expect(dog.breed).toBe('German Shepherd');
  });

  test('should bark', () => {
    const dog = new Dog('Rex', 'German Shepherd');
    console.log = jest.fn();
    dog.speak();
    expect(console.log).toHaveBeenCalledWith('Woof!');
  });
});
