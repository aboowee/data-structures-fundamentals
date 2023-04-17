var Queue = function() {

  this.storage = {};
  this.increment = 0;

};

Queue.prototype.enqueue = function(value) {
  this.storage[this.increment] = value;
  this.increment++;
};
Queue.prototype.dequeue = function() {
  var firstValue = this.storage[Object.keys(this.storage)[0]];
  delete this.storage[Object.keys(this.storage)[0]];
  return firstValue;
};
Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};