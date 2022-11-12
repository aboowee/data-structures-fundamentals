var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);

  // your code here
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {

  var innerFunction = function(targetValue, currentNode) {
    if (currentNode.value === targetValue) {
      return true;
    } else if (currentNode.children.length) {
      for (var i = 0; i < currentNode.children.length; i++) {
        var result = innerFunction(targetValue, currentNode.children[i]);
        if (result) {
          return true;
        }
      }
    }
    return false;
  };
  return innerFunction(target, this);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */