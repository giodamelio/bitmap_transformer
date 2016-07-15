const expect = require('chai').expect;

const parse = require('../lib/parse');

describe('Bitmap parsing', function() {
  it('test parsing', function(done) {
    parse('image.bmp', function(image) {
      expect(image).to.equal('Parsed image');
      done();
    });
  });
});
