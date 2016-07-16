'use strict';

const transform = function(image, transformName, callback) {
  if (transformName === 'black') {
    for (let x = 0; x < image.width; x++) {
      for (let y = 0; y < image.height; y++) {
        image.setPixel(x, y, 0x00, 0x00, 0x00);
      }
    }
    return callback(null, image);
  } else if (transformName === 'grey-scale') {
    for (let x = 0; x < image.width; x++) {
      for (let y = 0; y < image.height; y++) {
        const pixel = image.getPixel(x, y);
        const average = (pixel[0] + pixel[1] + pixel[2]) / 3;
        image.setPixel(x, y, average, average, average);
      }
    }
    return callback(null, image);
  } else if (transformName === 'red-scale') {
    for (let x = 0; x < image.width; x++) {
      for (let y = 0; y < image.height; y++) {
        const pixel = image.getPixel(x, y);
        const average = (pixel[0] + pixel[1] + pixel[2]) / 3;
        image.setPixel(x, y, 255, average, 0);
      }
    }
    return callback(null, image);
  } else if (transformName === 'invert') {
    for (let x = 0; x < image.width; x++) {
      for (let y = 0; y < image.height; y++) {
        const pixel = image.getPixel(x, y);
        image.setPixel(x, y, 255 - pixel[0], 255 - pixel[1], 255 - pixel[2]);
      }
    }
    return callback(null, image);
  } else if (transformName === 'mirror') {
    for (let y = 0; y < image.width; y++) {
      let rowArr = [];
      for (let x = 0; x < image.height; x++) {
        rowArr.push(image.getPixel(x,y));
      }
      rowArr.reverse();
      for (let x = 0; x < rowArr.length; x++){
        image.setPixel(x, y, rowArr[x][0], rowArr[x][1], rowArr[x][2]);
      }
    }
    return callback(null, image);
  }

  callback('No transformName passed');
};

module.exports = transform;
