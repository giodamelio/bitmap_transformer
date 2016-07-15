'use strict';

const parse = function(imageBuffer, callback) {
  let image = {};

  if (imageBuffer.toString('utf8', 0, 2) !== 'BM') {
    return callback('Not a valid bitmap image');
  }

  image.fileSize = imageBuffer.readUInt32LE(2);
  image.pixelOffset = imageBuffer.readUInt32LE(10);
  image.width = imageBuffer.readUInt32LE(18);
  image.height = imageBuffer.readUInt32LE(22);
  image.bitsPerPixel = imageBuffer.readUInt16LE(28);
  image.totalPixelSize = imageBuffer.readUInt32LE(34);
  image.colorsInPalette = imageBuffer.readUInt32LE(46);

  callback(null, image);
};

module.exports = parse;
