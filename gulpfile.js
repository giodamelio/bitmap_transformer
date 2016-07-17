const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

const srcFiles = ['lib/**/*.js', 'bin/*'];
const testFiles = 'test/**/*.js';

const baseLinterOptions = {
  rules: {
    'no-console': 0,
    indent: [2, 2],
    quotes: [2, 'single'],
    'linebreak-style': [2, 'unix'],
    semi: [2, 'always'],
    'no-undef': 2
  },
  envs: ['node', 'es6'],
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      impliedStrict: true
    }
  },
  extends: 'eslint:recommended'
};

// Linter tasks -------------------------------------------
gulp.task('lint:src', function() {
  return gulp.src(srcFiles)
    .pipe(eslint(baseLinterOptions))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('lint:test', function() {
  return gulp.src(testFiles)
    .pipe(eslint(Object.assign(baseLinterOptions, {
      envs: ['node', 'es6', 'mocha']
    })))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('lint', ['lint:src', 'lint:test']);

gulp.task('lint:watch', function() {
  gulp.watch(srcFiles, ['lint:src'])
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });

  gulp.watch(testFiles, ['lint:test'])
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

// Test tasks ---------------------------------------------
gulp.task('test', function() {
  return gulp.src(testFiles, { read: false })
    .pipe(mocha({
      reporter: 'spec'
    }));
});

gulp.task('test:watch', ['test'], function() {
  gulp.watch([srcFiles, testFiles], ['test'])
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

gulp.task('default', ['lint', 'test']);
gulp.task('watch', ['lint:watch', 'test:watch']);
