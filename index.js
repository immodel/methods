module.exports = function(model) {
  model.methods = model.methods || {};
  model.statics = model.statics || {};
  
  Object.keys(model.methods).forEach(function(name) {
    model.prototype[name] = model.methods[name];
  });
  
  Object.keys(model.statics).forEach(function(name) {
    model[name] = model.statics[name];
  });
  
  model.method = function(name, fn) {
    return this.use(function(opts) {
      opts.methods[name] = fn;
    });
  };

  model.static = function(name, fn) {
    return this.use(function(opts) {
      opts.statics[name] = fn;
    });
  };
};