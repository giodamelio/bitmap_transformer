'use strict';

const fs = require('fs');
const buffer = require('buffer');
const path = require('path');
const expect = require('chai').expect;
const parse = require('../lib/parse');
const transform = require('../lib/transform');

describe('Bitmap transform', function() {
  it('error on no transform name', function(done) {
    const imageBuffer = fs.readFileSync('./img/non-palette-bitmap.bmp');
    parse(imageBuffer, function(err, image) {
      expect(err).to.equal(null);
      transform(image, null, function(err, newImage) {
        expect(err).to.equal('No transformName passed');
        done();
      });
    });
  });

  it('black transform', function(done) {
    const inputImage = fs.readFileSync(
      path.join(__dirname, 'images/test.bmp')
    );
    const expectedImage = fs.readFileSync(
      path.join(__dirname, 'images/transform_outputs/black.bmp')
    );
    parse(inputImage, function(err, image) {
      expect(err).to.equal(null);
      transform(image, 'black', function(err, newImage) {
        expect(image.originalImageBuffer).to.deep.equal(expectedImage);
        done();
      });
    });
  });

  it('grey-scale transform', function(done) {
    const inputImage = fs.readFileSync(
      path.join(__dirname, 'images/test.bmp')
    );
    const expectedImage = fs.readFileSync(
      path.join(__dirname, 'images/transform_outputs/grey-scale.bmp')
    );
    parse(inputImage, function(err, image) {
      expect(err).to.equal(null);
      transform(image, 'grey-scale', function(err, newImage) {
        expect(image.originalImageBuffer).to.deep.equal(expectedImage);
        done();
      });
    });
  });

  it('invert transform', function(done) {
    const inputImage = fs.readFileSync(
      path.join(__dirname, 'images/test.bmp')
    );
    const expectedImage = fs.readFileSync(
      path.join(__dirname, 'images/transform_outputs/invert.bmp')
    );
    parse(inputImage, function(err, image) {
      expect(err).to.equal(null);
      transform(image, 'invert', function(err, newImage) {
        expect(image.originalImageBuffer).to.deep.equal(expectedImage);
        done();
      });
    });
  });

  it('mirror transform', function(done) {
    const inputImage = fs.readFileSync(
      path.join(__dirname, 'images/test.bmp')
    );
    const expectedImage = fs.readFileSync(
      path.join(__dirname, 'images/transform_outputs/mirror.bmp')
    );
    parse(inputImage, function(err, image) {
      expect(err).to.equal(null);
      transform(image, 'mirror', function(err, newImage) {
        expect(image.originalImageBuffer).to.deep.equal(expectedImage);
        done();
      });
    });
  });

  it('red-scale transform', function(done) {
    const inputImage = fs.readFileSync(
      path.join(__dirname, 'images/test.bmp')
    );
    const expectedImage = fs.readFileSync(
      path.join(__dirname, 'images/transform_outputs/red-scale.bmp')
    );
    parse(inputImage, function(err, image) {
      expect(err).to.equal(null);
      transform(image, 'red-scale', function(err, newImage) {
        expect(image.originalImageBuffer).to.deep.equal(expectedImage);
        done();
      });
    });
  });
});
