'use strict';

const parse = function(imageBuffer, callback) {
  let image = {};

  if (imageBuffer.toString('utf8', 0, 2) !== 'BM') {
    return callback('Not a valid bitmap image');
  }

  image.fileSize = imageBuffer.readUInt32LE(2);
  image.pixelOffset = imageBuffer.readUInt32LE(10);

  callback(null, image);
};

module.exports = parse;
