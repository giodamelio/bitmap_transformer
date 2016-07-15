'use strict'

const transform = function(image, callback) {
  let pixelArray = image.originalImageBuffer.slice(image.pixelOffset);

  for (let i = 0; i < pixelArray.length; i++) {
    pixelArray[i] = 255 - pixelArray[i];
  }
  console.log(pixelArray);
  callback(null, image);
};

module.exports = transform;
