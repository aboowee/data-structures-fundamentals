
//Must be in pseudoclassical (uses prototype, when calling (uses new))
//does not need "this = object.create (methods)"
//do not need "return this;""
// Instantiate a new graph
var Graph = function() {
  // this.nodes = [ {value: 2, edges: [{1}, 3, 4, 5] }     , {value: 3, edges: [1, 2, 4, 5] }    ];
  this.nodes = [];
  //{node1 : #, node 2 : #      }
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push({value: node, edges: []});
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //Loop through nodes
  //Somehow remove from array
  //splice(index)

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


