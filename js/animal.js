export { Animal };

class Animal {
  constructor(name) {
    this._name = name;
  }
  speak() {
    console.log(this.name + " makes a noise.");
  }

  get name() {
    return this._name;
  }

}
