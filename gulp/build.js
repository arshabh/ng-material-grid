'use strict';

var conf = require('./conf');
var gulp = require('gulp');
var path = require('path');

var $ = require('gulp-load-plugins')();

gulp.task('partials', function () {
  return gulp.src([
        path.join(conf.paths.src, '/partials/**/*.html')
      ])
      .pipe($.minifyHtml({
        empty: true,
        spare: true,
        quotes: true
      }))
      .pipe($.angularTemplatecache('templateCacheHtml.js', {
        module: 'ng-material-grid'
      }))
      .pipe(gulp.dest(conf.paths.tmp + '/partials/'));
});

gulp.task('styles', function () {
  return gulp.src(path.join(conf.paths.src, '/styles/**/*.css'))
      .pipe(gulp.dest(conf.paths.dist));
});

gulp.task('build', ['partials', 'styles'], function () {
  gulp.src([
    path.join(conf.paths.src, '/js/ng-material-grid.js'),
    path.join(conf.paths.tmp, '/partials/templateCacheHtml.js')
  ])
      .pipe($.concat(path.join('ng-material-grid.min.js')))
      .pipe(gulp.dest(conf.paths.dist))
});