var Stack = function() {
  var someInstance = {};

  someInstance.storage = {};

  someInstance.increment = 0;

  _.extend(someInstance, stackMethods);

  return someInstance;

};

var stackMethods = {
  push: function(value) {
    this.storage[this.increment] = value;
    this.increment++;
  },
  pop: function() {
    var lastValue = this.storage[Object.keys(this.storage)[Object.keys(this.storage).length - 1]];
    delete this.storage[Object.keys(this.storage)[Object.keys(this.storage).length - 1]];
    return lastValue;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};