'use strict';

const fs = require('fs');
const buffer = require('buffer');
const path = require('path');
const expect = require('chai').expect;
const parse = require('../lib/parse');
const transform = require('../lib/transform');

describe('Bitmap transform', () => {
  it('error on no transform name', (done) => {
    const imageBuffer = fs.readFileSync('./img/non-palette-bitmap.bmp');
    parse(imageBuffer, (err, image) => {
      expect(err).to.equal(null);
      transform(image, null, (err, newImage) => {
        expect(err).to.equal('No transformName passed');
        done();
      });
    });
  });

  it('black transform', (done) => {
    const inputImage = fs.readFileSync(
      path.join(__dirname, 'images/test.bmp')
    );
    const expectedImage = fs.readFileSync(
      path.join(__dirname, 'images/transform_outputs/black.bmp')
    );
    parse(inputImage, (err, image) => {
      expect(err).to.equal(null);
      transform(image, 'black', (err, newImage) => {
        expect(image.originalImageBuffer).to.deep.equal(expectedImage);
        done();
      });
    });
  });

  it('grey-scale transform', (done) => {
    const inputImage = fs.readFileSync(
      path.join(__dirname, 'images/test.bmp')
    );
    const expectedImage = fs.readFileSync(
      path.join(__dirname, 'images/transform_outputs/grey-scale.bmp')
    );
    parse(inputImage, (err, image) => {
      expect(err).to.equal(null);
      transform(image, 'grey-scale', (err, newImage) => {
        expect(image.originalImageBuffer).to.deep.equal(expectedImage);
        done();
      });
    });
  });

  it('invert transform', (done) => {
    const inputImage = fs.readFileSync(
      path.join(__dirname, 'images/test.bmp')
    );
    const expectedImage = fs.readFileSync(
      path.join(__dirname, 'images/transform_outputs/invert.bmp')
    );
    parse(inputImage, (err, image) => {
      expect(err).to.equal(null);
      transform(image, 'invert', (err, newImage) => {
        expect(image.originalImageBuffer).to.deep.equal(expectedImage);
        done();
      });
    });
  });

  it('mirror transform', (done) => {
    const inputImage = fs.readFileSync(
      path.join(__dirname, 'images/test.bmp')
    );
    const expectedImage = fs.readFileSync(
      path.join(__dirname, 'images/transform_outputs/mirror.bmp')
    );
    parse(inputImage, (err, image) => {
      expect(err).to.equal(null);
      transform(image, 'mirror', (err, newImage) => {
        expect(image.originalImageBuffer).to.deep.equal(expectedImage);
        done();
      });
    });
  });

  it('red-scale transform', (done) => {
    const inputImage = fs.readFileSync(
      path.join(__dirname, 'images/test.bmp')
    );
    const expectedImage = fs.readFileSync(
      path.join(__dirname, 'images/transform_outputs/red-scale.bmp')
    );
    parse(inputImage, (err, image) => {
      expect(err).to.equal(null);
      transform(image, 'red-scale', (err, newImage) => {
        expect(image.originalImageBuffer).to.deep.equal(expectedImage);
        done();
      });
    });
  });
});
