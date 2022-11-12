//Pseudoclassical

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage.get(index) === undefined){
    var bucket = [];
  } else {
    var bucket = this._storage.get(index);
  }

  //was going to push key:value to array bucket and override if present.



  //if bucket does not contain tuple (check if key === tuple [0])
  //Push tuple into bucket
  //Else if tuple[0] === key
  //Overwrite tuple
  this._storage.set(index, bucket);
    //value = v?

    //[[],[],[] ]
    //[key, value]
    //
    //[
    //  [[mcdonalds, 'fat'], [burger king, 'burgers' ]], if key === tuple[0] {}
    //   ...
    //]

  });

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(value, key, array) {
    if (key === index) {
      array.splice(key, 1);
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


