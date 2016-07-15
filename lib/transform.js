'use strict';

const transform = function(image, callback) {

  for (let i = 0; i < image.pixelArray.length; i++) {
    image.pixelArray[i] = 0;
  }
  callback(null, image);
};

module.exports = transform;
