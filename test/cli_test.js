'let strict';
const expect = require('chai').expect;

const cli = require('../bin/_bitmap_transform');

describe('Command line', function() {
  it('test basic transform', function(done) {
    const args = [
      null,
      null,
      './img/non-palette-bitmap.bmp',
      './img/transformed-img/output.bmp'
    ];
    let called = false;
    const testStream = {
      write: function(data) {
        called = true;
      }
    };

    cli(testStream, args, function(err) {
      debugger;
      expect(err).to.equal(null);
      expect(called).to.equal(true);
      done();
    });
  });
});
