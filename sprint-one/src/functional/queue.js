var Queue = function() {

  var someInstance = {};
  var storage = {};
  var increment = 0;

  someInstance.enqueue = function(value) {
    storage[increment] = value;
    increment++;
  };

  someInstance.dequeue = function() {
    var firstValue = storage[Object.keys(storage)[0]];
    delete storage[Object.keys(storage)[0]];
    return firstValue;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};