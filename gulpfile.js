'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const concat = require('gulp-concat');
const minifyCSS = require('gulp-minify-css');
const rename = require('gulp-rename');

exports.default = function () {
    return gulp.src('./css/styles.less')
        .pipe(less())
        .pipe(concat("style.css"))
        .pipe(minifyCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/'))
};

exports.watch = function () {
    gulp.watch(['./css/styles.less, ./css/adaptive.less'])
};