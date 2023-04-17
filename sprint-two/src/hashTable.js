var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage.get(index) === undefined) {
    this._storage.set(index, [k, v]);
  } else {
    var bucket = this._storage.get(index);
    if (bucket.includes(k)) {
      bucket[bucket.indexOf(k) + 1] = v;
    } else {
      bucket.push(k, v);
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var currentBucket = this._storage.get(index);
  if (currentBucket.includes(k)) {
    return currentBucket[currentBucket.indexOf(k) + 1];
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket.includes(k)) {
    bucket.splice(k, 2);
  }
};


