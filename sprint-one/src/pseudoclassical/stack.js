var Stack = function() {
  this.storage = {};
  this.increment = 0;

};

Stack.prototype.push = function(value) {
  this.storage[this.increment] = value;
  this.increment++;
};
Stack.prototype.pop = function() {
  var lastValue = this.storage[Object.keys(this.storage)[Object.keys(this.storage).length - 1]];
  delete this.storage[Object.keys(this.storage)[Object.keys(this.storage).length - 1]];
  return lastValue;
};
Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};
