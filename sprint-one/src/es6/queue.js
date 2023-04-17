class Queue {
  constructor() {
    this.storage = {};
    this.increment = 0;
  }

  enqueue(value) {
    this.storage[this.increment] = value;
    this.increment++;
  }

  dequeue() {
    var firstValue = this.storage[Object.keys(this.storage)[0]];
    delete this.storage[Object.keys(this.storage)[0]];
    return firstValue;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}


