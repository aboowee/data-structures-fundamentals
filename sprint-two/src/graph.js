
var Graph = function() {

  this.nodes = [];

};

Graph.prototype.addNode = function(node) {
  this.nodes.push({value: node, edges: []});
};

Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === node) {
      return true;
    }
  }
  return false;
};

Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === node) {
      this.nodes.splice(i, 1);
      for (var j = 0; j < this.nodes.length; j++) {
        this.removeEdge(this.nodes[j].value, node);
      }
    }
  }

};

Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === fromNode) {
      if (this.nodes[i].edges.indexOf(toNode) > -1) {
        return true;
      }
    }
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode) {

  if (this.contains(fromNode) && this.contains(toNode)) {

    for (let i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i].value === fromNode) {
        this.nodes[i].edges.push(toNode);
      }
      if (this.nodes[i].value === toNode) {
        this.nodes[i].edges.push(fromNode);
      }
    }
  }

};

Graph.prototype.removeEdge = function(fromNode, toNode) {

  for (let i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === fromNode) {
      if (this.nodes[i].edges.indexOf(toNode) > -1) {
        var indexToSplice = this.nodes[i].edges.indexOf(toNode);
        this.nodes[i].edges.splice(indexToSplice, 1);
      }
    }

    if (this.nodes[i].value === toNode) {
      if (this.nodes[i].edges.indexOf(fromNode) > -1) {
        var indexToSplice = this.nodes[i].edges.indexOf(fromNode);
        this.nodes[i].edges.splice(indexToSplice, 1);
      }
    }
  }

};

Graph.prototype.forEachNode = function(cb) {
  for (let i = 0; i < this.nodes.length; i++) {
    cb(this.nodes[i].value);
  }
};

