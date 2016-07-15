const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

const SRC_FILES = 'lib/**/*.js';
const TEST_FILES = 'test/**/*.js';

// Linter tasks -------------------------------------------
gulp.task('lint:src', function() {
  return gulp.src(SRC_FILES)
    .pipe(eslint({
      rules: {
        'no-console': 0,
        indent: [2, 2],
        quotes: [2, 'single'],
        'linebreak-style': [2, 'unix'],
        semi: [2, 'always'],
        'no-undef': 2,
      },
      envs: ['node', 'es6'],
      parserOptions: {
        ecmaVersion: 6,
        ecmaFeatures: {
          impliedStrict: true,
        }
      },
      extends: 'eslint:recommended',
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('lint:test', function() {
  return gulp.src(TEST_FILES)
    .pipe(eslint({
      rules: {
        'no-console': 0,
        indent: [2, 2],
        quotes: [2, 'single'],
        'linebreak-style': [2, 'unix'],
        semi: [2, 'always'],
        'no-undef': 2,
      },
      envs: ['node', 'es6', 'mocha'],
      parserOptions: {
        ecmaVersion: 6,
        ecmaFeatures: {
          impliedStrict: true,
        }
      },
      extends: 'eslint:recommended',
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('lint', ['lint:src', 'lint:test']);

gulp.task('lint:watch', function() {
  gulp.watch(SRC_FILES, ['lint:src'])
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });

  gulp.watch(TEST_FILES, ['lint:test'])
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

// Test tasks ---------------------------------------------
gulp.task('test', function() {
  return gulp.src(TEST_FILES, { read: false })
    .pipe(mocha({
      reporter: 'spec',
    }));
});

gulp.task('test:watch', function() {
  gulp.watch([SRC_FILES, TEST_FILES], ['test'])
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

gulp.task('default', ['lint', 'test']);
gulp.task('watch', ['lint:watch', 'test:watch']);
