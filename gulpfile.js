var gulp = require('gulp'),
  gutil = require('gulp-util'),
  chalk = require('chalk'),
  order = require('gulp-order'),
  rename = require('gulp-rename'),
  merge = require('utils-merge'),
  mergeStream = require('merge-stream'),
  gulpIf = require('gulp-if'),
  concat = require('gulp-concat'),
  source = require('vinyl-source-stream'),
  sourcemaps = require('gulp-sourcemaps'),
  nodemon = require('gulp-nodemon'),
  browserify = require('browserify'),
  reactify = require('reactify'),
  coffeeify = require('coffeeify'),
  watchify = require('watchify'),
  uglify = require('gulp-uglify'),
  buffer = require('vinyl-buffer'),
  browserSync = require('browser-sync').create(),

  stylus = require('gulp-stylus'),
  autoprefixer = require('autoprefixer-stylus'),
  nib = require('nib'),
  jeet = require('jeet'),
  rupture = require('rupture'),
  coffee = require('gulp-coffee'),
  cjsx = require('gulp-cjsx'),
  react = require('gulp-react');

var paths= {
  styles: [
    './app/styles/**/*.styl'
  ],
  scripts: [
    './app/scripts/**/*.coffee'
  ],
  reacts: [
    './app/components/**/*.*jsx'
  ]
};

function mapError(err) {
  if (err.fileName) {
    gutil.log(chalk.red(err.name)
      + ': '
      + chalk.yellow(err.fileName.replace(__dirname, ''))
      + ': '
      + 'Line '
      + chalk.magenta(err.lineNumber)
      + ' & '
      + 'Column '
      + chalk.magenta(err.columnNumber || err.column)
      + ': '
      + chalk.blue(err.description))
  } else {
    gutil.log(chalk.red(err.name)
      + ': '
      + chalk.yellow(err.message))
  }

  this.emit('end');
}

function mapLog(msg) { gutil.log('Script updated: '+chalk.blue.bold(msg)); }

//gulp.task('react-watchify', function () {
//  var args = merge(watchify.args, { debug: true });
//  var bundler = watchify(browserify('./app/entry.jsx', args))
//    .transform(reactify, { /* opts */ });
//
//  bundleScript(bundler, 'react-bundle.js');
//
//  bundler.on('update', function () {
//    bundleScript(bundler, 'react-bundle.js');
//  })
//});

gulp.task('reactify', function(){
  watchifyBuilder(reactify, './app/entry.jsx', 'react-bundle.js', {}, true);
});

gulp.task('coffeeify', function(){
  watchifyBuilder(coffeeify, './app/entry.coffee', 'bundle.js', {});
});

function watchifyBuilder(compressor, entryPoint, filename, options, uglifyDisable) {
  var args = merge(watchify.args, { debug: true });
  var bundler = watchify(browserify(entryPoint, args)).transform(compressor, options);
  bundleScript(bundler, filename, uglifyDisable);
  bundler.on('update', function(){
    bundleScript(bundler, filename, uglifyDisable);
  }).on('log', mapLog)
}

function bundleScript(bundler, filename, uglifyDisable) {
  return bundler.bundle()
    .on('error', mapError)
    .pipe(source(filename))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(gulpIf(!uglifyDisable, uglify()))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./assets'))
    .pipe(browserSync.stream())
}

gulp.task('style-bundle', function() {
  gulp.src(paths.styles)
    .pipe(sourcemaps.init())
    .pipe(stylus(stylus({use: [nib(), jeet(), rupture(), autoprefixer()]})))
    .pipe(concat("bundle.css"))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./assets'))
    .pipe(browserSync.stream());
});

gulp.task('script-bundle', function() {
  gulp.src(paths.scripts)
    .pipe(sourcemaps.init())
    .pipe(coffee())
    .pipe(concat("bundle.js"))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./assets'))
});

gulp.task('react-bundle', function() {
  gulp.src(paths.reacts)
    .pipe(sourcemaps.init())
    .pipe(gulpIf(/[.]cjsx$/, cjsx(), react()))
    .pipe(sourcemaps.write())
    .pipe(concat("react-bundle.js"))
    .pipe(gulp.dest('./assets'))
});

gulp.task('browser-sync', ['nodemon'], function() {
  browserSync.init(null, {
    port: 2015,
    proxy: "http://localhost:7000",
    files: ["./server/**/*.jade"],
    open: false
  });

  gulp.watch("./app/**/*.styl", ['style-bundle']);
});

var nodemonIgnores = ['app/**/*', 'assets/**/*'];
gulp.task('nodemon', function (callback) {
  var started = false;
  nodemon({script: 'server/server.js', ignore: nodemonIgnores}).on('start', function () {
    if (!started) { callback(); started = true; }
  });
});

gulp.task('default', ['style-bundle', 'reactify', 'coffeeify', 'browser-sync']);