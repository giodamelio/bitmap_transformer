# Bitmap transformer
[![Build Status](https://travis-ci.org/giodamelio/bitmap_transformer.svg?branch=master)](https://travis-ci.org/giodamelio/bitmap_transformer)
[![codecov](https://codecov.io/gh/giodamelio/bitmap_transformer/branch/master/graph/badge.svg)](https://codecov.io/gh/giodamelio/bitmap_transformer) [![npm version](https://img.shields.io/npm/v/bitmap_transformer.svg)](https://www.npmjs.com/package/bitmap_transformer) ![npm downloads](https://img.shields.io/npm/dt/bitmap_transformer.svg)

This is a basic bitmap parser and transformer.

# Instructions

    # Install with npm
    npm install --global bitmap_transformer

    # Run command line
    # bitmap_transformer <transform type> <input bitmap> <output bitmap>
    # Transformation types
    #    black
    #    mirror
    #    grey-scale
    #    red-scale
    #    invert

    # Example
    bitmap_transformer black ./img/non-palette-bitmap.bmp ./img/transformed-img/black.bmp

    # Run tests
    gulp test
    
    # Run code coverage tests
    npm run coverage

    # Run lint
    gulp lint

    # Watch both the tests and the linter
    gulp watch

# Bonus points

  - Create a command line interface
  - Can handle any sized bitmap
  - Handle both endianess (not quite sure if this works completely, kind of hard to test)
  - Command line can select transform type
  - Make project installable with npm

# Authors

  - [Gio d'Amelio](https://github.com/giodamelio)
  - [Aliza Pilisuk](https://github.com/aliza89p)
