var gulp = require('gulp'),
  order = require('gulp-order'),
  rename = require('gulp-rename'),
  merge = require('merge-stream'),
  gulpIf = require('gulp-if'),
  concat = require('gulp-concat'),
  sourcemaps = require('gulp-sourcemaps'),
  nodemon = require('gulp-nodemon'),
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

gulp.task('style-bundle', function() {
  gulp.src(paths.styles)
    .pipe(sourcemaps.init())
    .pipe(stylus(stylus({use: [nib(), jeet(), rupture(), autoprefixer()]})))
    .pipe(concat("bundle.css"))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./server/assets'))
});

gulp.task('script-bundle', function() {
  gulp.src(paths.scripts)
    .pipe(sourcemaps.init())
    .pipe(coffee())
    .pipe(concat("bundle.js"))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./server/assets'))
});

gulp.task('react-bundle', function() {
  gulp.src(paths.reacts)
    .pipe(sourcemaps.init())
    .pipe(gulpIf(/[.]cjsx$/, cjsx(), react()))
    .pipe(sourcemaps.write())
    .pipe(concat("react-bundle.js"))
    .pipe(gulp.dest('./server/assets'))
});

gulp.task('browser-sync', ['nodemon'], function() {
  browserSync.init(null, {
    port: 2015,
    proxy: "http://localhost:7000",
    files: ["./server/**/*.jade"],
    open: false
  });

  gulp.watch("./app/**/*.styl", ['style-bundle']);
  gulp.watch("./app/**/*.coffee", ['script-bundle']);
  gulp.watch(["./app/**/*.*jsx"], ['react-bundle']);
});

gulp.task('nodemon', function (callback) {
  var started = false;
  nodemon({script: 'server/server.js'}).on('start', function () {
    if (!started) {
      callback(); started = false;
    }
  });
});

gulp.task('default', ['style-bundle','script-bundle', 'react-bundle', 'browser-sync']);