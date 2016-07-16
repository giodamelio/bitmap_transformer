const fs = require('fs');

const parse = require('../lib/parse');
const transform = require('../lib/transform');
const write = require('../lib/write');

const cli = function(writeStream, args, callback) {
  args = args.slice(2);

  if (args.length < 2) {
    callback('You must pass in a input bitmap image and an output location for transformed bitmap');
  }

  fs.readFile(args[0], function(err, imageBuffer) {
    if (err) {
      callback('Image does not exist');
    }

    parse(imageBuffer, function(err, image) {
      if (err) {
        callback('Unable to parse bitmap');
      }
      writeStream.write('Parsing bitmap...\n');

      transform(image, function(err, newImage) {
        if (err) {
          callback('Error transforming image');
        }
        writeStream.write('Transforming...\n');

        write(newImage, args[1], function(err) {
          if (err) {
            callback('Error writing transformed image');
          }
          writeStream.write('Image transformed...\n');
          callback(null);
        });
      });
    });
  });
};

module.exports = cli;
