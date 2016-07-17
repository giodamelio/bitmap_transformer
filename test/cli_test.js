'use strict';

const expect = require('chai').expect;
const cli = require('../bin/_bitmap_transform');

describe('Command line', () => {
  it('basic transform', (done) => {
    const args = [
      null,
      null,
      'black',
      './img/non-palette-bitmap.bmp',
      './img/transformed-img/output.bmp'
    ];
    let called = false;
    const testStream = {
      write: function() {
        called = true;
      }
    };

    cli(testStream, args, (err) => {
      expect(err).to.equal(null);
      expect(called).to.equal(true);
      done();
    });
  });

  it('invalid arguments', (done) => {
    const args = [
      null,
      null
    ];
    let called = false;
    const testStream = {
      write: function() {
        called = true;
      }
    };

    cli(testStream, args, (err) => {
      expect(err).to.equal('You must pass in a transformation type, input bitmap and output path');
      expect(called).to.equal(false);
      done();
    });
  });

  it('invalid input image path', (done) => {
    const args = [
      null,
      null,
      'black',
      'i-do-not-exist.bmp',
      'output.bmp'
    ];
    let called = false;
    const testStream = {
      write: function() {
        called = true;
      }
    };

    cli(testStream, args, (err) => {
      expect(err).to.equal('Image does not exist');
      expect(called).to.equal(false);
      done();
    });
  });

  it('parsing error', (done) => {
    const args = [
      null,
      null,
      'black',
      './package.json', // This is not a bitmap!
      'output.bmp'
    ];
    let called = false;
    const testStream = {
      write: function() {
        called = true;
      }
    };

    cli(testStream, args, (err) => {
      expect(err).to.equal('Unable to parse bitmap');
      expect(called).to.equal(false);
      done();
    });
  });

  it('transforming error', (done) => {
    const args = [
      null,
      null,
      'this-transform-does-not-exist',
      './img/non-palette-bitmap.bmp',
      'output.bmp'
    ];
    let called = false;
    const testStream = {
      write: function() {
        called = true;
      }
    };

    cli(testStream, args, (err) => {
      expect(err).to.equal('Error transforming image');
      expect(called).to.equal(true);
      done();
    });
  });

  it('writing error', (done) => {
    const args = [
      null,
      null,
      'black',
      './img/non-palette-bitmap.bmp',
      ''
    ];
    let called = false;
    const testStream = {
      write: function() {
        called = true;
      }
    };

    cli(testStream, args, (err) => {
      expect(err).to.equal('Error writing transformed image');
      expect(called).to.equal(true);
      done();
    });
  });
});
