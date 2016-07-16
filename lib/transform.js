'use strict';

const transform = function(image, transformName, callback) {
  if (transformName === 'black') {
    for (let i = 0; i < image.pixelArray.length; i++) {
      image.pixelArray[i] = 0;
    }
    return callback(null, image);
  }

  callback('No transformName passed');
};

module.exports = transform;
