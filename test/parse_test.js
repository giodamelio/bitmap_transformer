const fs = require('fs');
const buffer = require('buffer');

const expect = require('chai').expect;

const parse = require('../lib/parse');

describe('Bitmap parsing', function() {
  it('testing if BM exits at beggining of file', function(done) {
    const image = new buffer.Buffer('I AM NOT AN IMAGE');
    parse(image, function(err, image) {
      expect(err).to.equal('Not a valid bitmap image');
      expect(image).to.equal(undefined);
      done();
    });
  })

  it('parse image size', function(done) {
    const image = fs.readFileSync('./img/non-palette-bitmap.bmp');
    parse(image, function(err, image) {
      expect(err).to.equal(null);
      expect(image.fileSize).to.equal(30054);
      done();
    });
  });

  it('parse pixel offset', function(done) {
    const image = fs.readFileSync('./img/non-palette-bitmap.bmp');
    parse(image, function(err, image) {
      expect(err).to.equal(null);
      expect(image.pixelOffset).to.equal(54);
      done();
    });
  });

  it('parse width and height', function(done) {
    const image = fs.readFileSync('./img/non-palette-bitmap.bmp');
    parse(image, function(err, image) {
      expect(err).to.equal(null);
      expect(image.width).to.equal(100);
      expect(image.height).to.equal(100);
      done();
    });
  });

  it('parse bits per pixel', function(done) {
    const image = fs.readFileSync('./img/non-palette-bitmap.bmp');
    parse(image, function(err, image) {
      expect(err).to.equal(null);
      expect(image.bitsPerPixel).to.equal(24);
      done();
    });
  });

  it('parse pixel data size', function(done) {
    const image = fs.readFileSync('./img/non-palette-bitmap.bmp');
    parse(image, function(err, image) {
      expect(err).to.equal(null);
      expect(image.totalPixelSize).to.equal(30000);
      done();
    });
  });

  it('parse number of colors in palette', function(done) {
    const image = fs.readFileSync('./img/non-palette-bitmap.bmp');
    parse(image, function(err, image) {
      expect(err).to.equal(null);
      expect(image.colorsInPalette).to.equal(0);
      done();
    });
  });
});
