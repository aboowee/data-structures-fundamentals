class Stack {

  constructor() {
    this.storage = {};
    this.increment = 0;
  }

  push(value) {
    this.storage[this.increment] = value;
    this.increment++;
  }

  pop() {
    var lastValue = this.storage[Object.keys(this.storage)[Object.keys(this.storage).length - 1]];
    delete this.storage[Object.keys(this.storage)[Object.keys(this.storage).length - 1]];
    return lastValue;
  }

  size() {
    return Object.keys(this.storage).length;
  }

}


