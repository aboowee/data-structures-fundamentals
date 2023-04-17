var BinarySearchTree = function(value) {
  var binaryTree = {};
  _.extend(binaryTree, binarySearchMethods);
  binaryTree.value = value;
  binaryTree.left = null;
  binaryTree.right = null;
  return binaryTree;
};

var binarySearchMethods = {
  insert: function (value) {
    if (!this.left && (value < this.value)) {
      this.left = BinarySearchTree (value);
    } else if (!this.right && (value > this.value)) {
      this.right = BinarySearchTree(value);
    }
    if (this.left && (value < this.value)) {
      this.left.insert(value);
    } else if (this.right && (value > this.value)) {
      this.right.insert(value);
    }
  },
  contains: function (value) {
    var exists = false;

    var innerFunction = function (targetValue, currentNode) {
      if (currentNode.value === targetValue) {
        exists = true;
      } else if ((targetValue < currentNode.value) && currentNode.left) {
        leftNode = currentNode.left;
        innerFunction (targetValue, leftNode);
      } else if ((targetValue > currentNode.value) && currentNode.right) {
        rightNode = currentNode.right;
        innerFunction (targetValue, rightNode);
      }
    };
    innerFunction(value, this);
    return exists;
  },
  depthFirstLog: function (callback) {

    var innerFunction = function (cb, currentNode) {
      if (currentNode.value) {
        cb(currentNode.value);
      }
      if (currentNode.left) {
        innerFunction(cb, currentNode.left);
      }
      if (currentNode.right) {
        innerFunction(cb, currentNode.right);
      }
    };
    innerFunction(callback, this);

  }
};
