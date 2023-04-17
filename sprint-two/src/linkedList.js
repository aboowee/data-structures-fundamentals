var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {

    var addedNode = Node(value);

    if (!list.head) {
      list.head = addedNode;
    }

    if (list.tail) {
      list.tail.next = addedNode;
    }
    list.tail = addedNode;
  };

  list.removeHead = function() {
    if (list.head) {
      var tempHeadVal = list.head;
      list.head = tempHeadVal.next;

      return tempHeadVal.value;
    }
  };

  list.contains = function(target) {
    var exists = false;

    var currentNode = list.head;

    do {
      if (currentNode.value === target) {
        exists = true;
        break;
      } else {
        currentNode = currentNode.next;
      }
    } while (currentNode);

    return exists;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};