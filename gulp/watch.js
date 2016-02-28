'use strict';

var conf = require('./conf');
var gulp = require('gulp');
var path = require('path');

gulp.task('watch', function () {
  gulp.watch([path.join(conf.paths.src, '**/**')], function (event) {
    gulp.start('build');
  });
});