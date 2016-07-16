'let strict';
const expect = require('chai').expect;

const cli = require('../bin/bitmap_transform');

describe('Command line', function() {
  before(function() {
    this.argv_backup = process.argv;
    process.argv = [null, null, './img/non-palette-bitmap.bmp'];
  });

  after(function() {
    process.argv = this.argv_backup;
  });

  it('says haha', function(done) {
    let called = false;
    const testStream = {
      write: function(data) {
        called = true;
        expect(data).to.equal('HAHA');
      }
    };
    cli(testStream);
    expect(called).to.equal(true);
    done();
  });
});
