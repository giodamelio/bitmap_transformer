'use strict';

const fs = require('fs');
const buffer = require('buffer');
const expect = require('chai').expect;
const parse = require('../lib/parse');
const transform = require('../lib/transform');

describe('Bitmap transform', function() {
  it('basic transform', function(done) {
    const imageBuffer = fs.readFileSync('./img/non-palette-bitmap.bmp');
    parse(imageBuffer, function(err, image) {
      expect(err).to.equal(null);
      transform(image, function(err, newImage) {
        let zerosBuffer = new buffer.Buffer(image.totalPixelSize).fill(0);
        expect(newImage.pixelArray).to.eql(zerosBuffer);
        done();
      });
    });
  });
});
