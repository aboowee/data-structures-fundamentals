var Stack = function() {

  var someInstance = {};

  var storage = {};

  var increment = 0;

  someInstance.push = function(value) {
    storage[increment] = value;
    increment++;
  };

  someInstance.pop = function() {
    var lastValue = storage[Object.keys(storage)[Object.keys(storage).length - 1]];
    delete storage[Object.keys(storage)[Object.keys(storage).length - 1]];
    return lastValue;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};