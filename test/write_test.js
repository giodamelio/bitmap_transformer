const fs = require('fs');
const expect = require('chai').expect;
const write = require('../lib/write');
const parse = require('../lib/parse');
const transform = require('../lib/transform');

describe('Writing new bitmap', function() {
  it('basic write', function(done) {
    const imageBuffer = fs.readFileSync('./img/non-palette-bitmap.bmp');
    parse(imageBuffer, function(err, image) {
      expect(err).to.equal(null);
      transform(image, function(err, newImage) {
        write(newImage, './img/transformed-img/black.bmp', function(err){
          expect(err).to.equal(null);
          done();
        });
      });
    });
  });
});
