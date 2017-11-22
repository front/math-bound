if(!Math.bound) {
  Math.bound = function(x, min, max) {
    return Math.max(Math.min(x, max), min);
  };

}

if (!Number.prototype.bound) {
  Number.prototype.bound = function(min, max) {
    return Math.bound(this, min, max);
  };  
}