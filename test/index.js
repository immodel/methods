var assert = require('assert');
var model = require('immodel')
  .use(require('immodel-base'), {methods: require('..')});

describe('methods', function() {
  it('should work', function() {
    var fn = function() {};
    var test = model
      .method('inst', fn)
      .static('static', fn);
    
    assert.equal(test.static, fn);
    var tmp = new test();
    assert.equal(tmp.inst, fn);    
  });
});