'use strict';

const fs = require('fs');
const expect = require('chai').expect;
const write = require('../lib/write');
const parse = require('../lib/parse');
const transform = require('../lib/transform');

describe('Writing new bitmap', () => {
  it('basic write', (done) => {
    const imageBuffer = fs.readFileSync('./img/non-palette-bitmap.bmp');
    parse(imageBuffer, (err, image) => {
      expect(err).to.equal(null);
      transform(image, 'black', (err, newImage) => {
        write(newImage, './img/transformed-img/black.bmp', (err) => {
          expect(err).to.equal(null);
          done();
        });
      });
    });
  });

  it('invalid image name', (done) => {
    const imageBuffer = fs.readFileSync('./img/non-palette-bitmap.bmp');
    parse(imageBuffer, (err, image) => {
      expect(err).to.equal(null);
      transform(image, 'black', (err, newImage) => {
        write(newImage, '', (err) => {
          expect(err).to.equal('Error writing image');
          done();
        });
      });
    });
  });
});
