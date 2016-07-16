'use strict';

const os = require('os');

const parse = function(imageBuffer, callback) {
  let image = {};

  if (imageBuffer.toString('utf8', 0, 2) !== 'BM') {
    return callback('Not a valid bitmap image');
  }

  const endianness = os.endianness();

  image.fileSize = imageBuffer['readUInt32' + endianness](2);
  image.pixelOffset = imageBuffer['readUInt32' + endianness](10);
  image.width = imageBuffer['readUInt32' + endianness](18);
  image.height = imageBuffer['readUInt32' + endianness](22);
  image.bitsPerPixel = imageBuffer['readUInt16' + endianness](28);
  image.totalPixelSize = imageBuffer['readUInt32' + endianness](34);
  image.colorsInPalette = imageBuffer['readUInt32' + endianness](46);
  image.originalImageBuffer = imageBuffer;
  image.pixelArray = imageBuffer.slice(image.pixelOffset);

  callback(null, image);
};

module.exports = parse;
