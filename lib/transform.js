'use strict';

const transform = function(image, transformName, callback) {
  if (transformName === 'black') {
    for (let x = 0; x < image.width; x++) {
      for (let y = 0; y < image.height; y++) {
        image.setPixel(x, y, 0x00, 0x00, 0x00);
      }
    }
    return callback(null, image);
  } else if (transformName === 'greyscale') {
    for (let x = 0; x < image.width; x++) {
      for (let y = 0; y < image.height; y++) {
        const pixel = image.getPixel(x, y);
        const average = (pixel[0] + pixel[1] + pixel[2]) / 3;
        image.setPixel(x, y, average, average, average);
      }
    }
    return callback(null, image);
  }

  callback('No transformName passed');
};

module.exports = transform;
