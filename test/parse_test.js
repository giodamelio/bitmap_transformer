const fs = require('fs');
const buffer = require('buffer');

const expect = require('chai').expect;

const parse = require('../lib/parse');

describe('Bitmap parsing', function() {
  // it('test parsing', function(done) {
  //   const image = fs.readFileSync('./img/non-palette-bitmap.bmp');
  //   parse(image, function(image) {
  //     expect(image).to.equal('Parsed image');
  //     done();
  //   });
  // });

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
});
