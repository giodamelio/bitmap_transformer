const expect = require('chai').expect;
const fs = require('fs');

const parse = require('../lib/parse');
const transform = require('../lib/transform');

describe('Bitmap transform', function() {
  it('basic transform', function(done) {
    const imageBuffer = fs.readFileSync('./img/non-palette-bitmap.bmp');
    parse(imageBuffer, function(err, image) {
      expect(err).to.equal(null);

      transform(image, function() {
        done();
      })
    });
  })
});
