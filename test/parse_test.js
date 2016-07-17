'use strict';

const fs = require('fs');
const buffer = require('buffer');
const expect = require('chai').expect;
const parse = require('../lib/parse');

describe('Bitmap parsing', () => {
  it('testing if BM exits at beggining of file', (done) => {
    const image = new buffer.Buffer('I AM NOT AN IMAGE');
    parse(image, (err, image) => {
      expect(err).to.equal('Not a valid bitmap image');
      expect(image).to.equal(undefined);
      done();
    });
  });

  it('parse image size', (done) => {
    const image = fs.readFileSync('./img/non-palette-bitmap.bmp');
    parse(image, (err, image) => {
      expect(err).to.equal(null);
      expect(image.fileSize).to.equal(30054);
      done();
    });
  });

  it('parse pixel offset', (done) => {
    const image = fs.readFileSync('./img/non-palette-bitmap.bmp');
    parse(image, (err, image) => {
      expect(err).to.equal(null);
      expect(image.pixelOffset).to.equal(54);
      done();
    });
  });

  it('parse width and height', (done) => {
    const image = fs.readFileSync('./img/non-palette-bitmap.bmp');
    parse(image, (err, image) => {
      expect(err).to.equal(null);
      expect(image.width).to.equal(100);
      expect(image.height).to.equal(100);
      done();
    });
  });

  it('parse bits per pixel', (done) => {
    const image = fs.readFileSync('./img/non-palette-bitmap.bmp');
    parse(image, (err, image) => {
      expect(err).to.equal(null);
      expect(image.bitsPerPixel).to.equal(24);
      done();
    });
  });

  it('parse pixel data size', (done) => {
    const image = fs.readFileSync('./img/non-palette-bitmap.bmp');
    parse(image, (err, image) => {
      expect(err).to.equal(null);
      expect(image.totalPixelSize).to.equal(30000);
      done();
    });
  });

  it('parse number of colors in palette', (done) => {
    const image = fs.readFileSync('./img/non-palette-bitmap.bmp');
    parse(image, (err, image) => {
      expect(err).to.equal(null);
      expect(image.colorsInPalette).to.equal(0);
      done();
    });
  });

  it('include original image buffer', (done) => {
    const image = fs.readFileSync('./img/non-palette-bitmap.bmp');
    parse(image, (err, image) => {
      expect(err).to.equal(null);
      expect(buffer.Buffer.isBuffer(image.originalImageBuffer)).to.equal(true);
      done();
    });
  });

  it('error when parsing bitmaps with palettes', (done) => {
    const image = fs.readFileSync('./img/palette-bitmap.bmp');
    parse(image, (err, image) => {
      expect(err).to.equal('Cannot parse bitmaps with color palettes');
      done();
    });
  });
});
