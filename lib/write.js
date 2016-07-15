'use strict';

const fs = require('fs');

const write = function(image, imagePath, callback) {
  fs.writeFile(imagePath, image.originalImageBuffer, function(err){
    if(err) return callback(err);
    callback(null);
  });
};

module.exports = write;
