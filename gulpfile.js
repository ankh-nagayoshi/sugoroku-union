//**************************************************
// modules load
//**************************************************

'use strict';

const gulp = require('gulp');
// const babel = require('gulp-babel');
// const sourcemaps = require('gulp-sourcemaps');
const browserify = require('browserify');
const watchify = require('watchify');
const babelify = require('babelify');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const less = require('gulp-less');
const logger = require('gulp-logger');
const imagemin = require('gulp-imagemin');
const gulpif = require('gulp-if');
const minimist = require('minimist');
const cssmin = require('gulp-cssmin');
const autoprefixer = require('gulp-autoprefixer');

//**************************************************
// path
//**************************************************

const args = minimist(process.argv.slice(2));
const isProduction = args.production;
process.env.NODE_ENV = isProduction ? 'production' : 'development';

const srcPath = './src';
let destPath = './dist';
if (isProduction) {
  destPath = './docs/dist';
}
const entryPointFile = 'index.jsx';
const cssSrcPath = `${srcPath}/less`;
const cssSrcFiles = `${cssSrcPath}/**/*.less`;
const cssDestPath = `${destPath}/css`;
const imgSrcPath = `${srcPath}/img`;
const imgJpegSrcFiles = `${imgSrcPath}/**/*.jpg`;
const imgPngSrcFiles = `${imgSrcPath}/**/*.png`;
const imgDestPath = `${destPath}/img`;


//**************************************************
// tasks
//**************************************************

function jscompile(isWatch) {
  let bundler;
  const entryPointFilePath = `${srcPath}/${entryPointFile}`;
  const browserifyOptions = {
    entries: [entryPointFilePath],
    extensions: ['.js', '.jsx'],
  };

  if (isWatch) {
    bundler = watchify(browserify(browserifyOptions));
  } else {
    bundler = browserify(browserifyOptions);
  }

  function rebundle() {
    // process.env.NODE_ENV = 'development'; // development build
    return bundler
      .transform(babelify, { presets: ['es2015', 'react'] })
      .bundle()
      .on('error', (err) => { Console.log(`Error: ${err.message}`); })
      .pipe(source(entryPointFile))
      .pipe(buffer())
      .pipe(rename({
        extname: '.js',
      }))
      .pipe(gulpif(isProduction, uglify()))
      .pipe(gulp.dest(destPath));
  }

  bundler.on('update', () => {
    rebundle();
  });

  bundler.on('log', (message) => {
    Console.log(message);
  });

  return rebundle();
}

// html copy
gulp.task('html', () => {
  if (!isProduction) {
    return null;
  }
  return gulp.src('./index.html')
    .pipe(gulp.dest('./docs'));
});

// browserify
gulp.task('browserify', () => {
  return jscompile(false);
});

// watchify
gulp.task('watchify', () => {
  return jscompile(true);
});

// css compile
gulp.task('css', () => {
  return gulp.src(cssSrcFiles, { base: cssSrcPath })
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(gulpif(isProduction, cssmin()))
    .pipe(gulp.dest(cssDestPath))
    .pipe(logger({ beforeEach: '[less] wrote: ' }));
});

// css watch
gulp.task('csswatch', () => {
  return gulp.watch(cssSrcFiles, ['css']);
});

// image minify
gulp.task('imagemin', () => {
  return [
    gulp.src(imgJpegSrcFiles)
      .pipe(imagemin())
      .pipe(gulp.dest(imgDestPath)),
    gulp.src(imgPngSrcFiles)
      .pipe(imagemin())
      .pipe(gulp.dest(imgDestPath)),
  ];
});

// image watch
gulp.task('imgwatch', () => {
  return gulp.watch([imgJpegSrcFiles, imgPngSrcFiles], ['imagemin']);
});

// watch
gulp.task('watch', ['watchify', 'csswatch', 'imgwatch']);

// all build
const tasks = ['browserify', 'css', 'imagemin'];
if (isProduction) {
  tasks.push('html');
}
gulp.task('build', tasks);
