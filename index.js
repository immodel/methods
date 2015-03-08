module.exports = function() {  
  this.method = function(name, fn) {
    return this.use(function() {
      this.prototype[name] = fn;
    });
  };

  this.static = function(name, fn) {
    return this.use(function() {
      this[name] = fn;
    });
  };
};