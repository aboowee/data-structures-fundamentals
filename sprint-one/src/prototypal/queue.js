var Queue = function() {

  var someInstance = Object.create(queueMethods);


  someInstance.storage = {};

  someInstance.increment = 0;

  return someInstance;

};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.increment] = value;
    this.increment++;
  },
  dequeue: function() {
    var firstValue = this.storage[Object.keys(this.storage)[0]];
    delete this.storage[Object.keys(this.storage)[0]];
    return firstValue;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};