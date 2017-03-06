//gulp variables
var gulp          = require('gulp');
var sass          = require('gulp-sass');
var prefixer      = require('gulp-autoprefixer');
var plumber       = require('gulp-plumber');
var neat          = require('node-neat');
var minifyCSS     = require('gulp-clean-css');
var rename        = require('gulp-rename');

// autoprefixer Options
var prefixerOptions = ['last 2 version', '> 1%', 'ie 9', 'ie 8'];

// Builds storytelling styles
/*
gulp.task('styles', function () {
    return gulp.src('./bin/styles/main.scss')
            .pipe(plumber())
            .pipe(sass({
                includePaths: neat.includePaths
            }))
           .pipe(prefixer(prefixerOptions))
           .pipe(minifyCSS({
               aggressiveMerging: true
           }))
          .pipe(rename('main.min.css'))
          .pipe(gulp.dest('/dist/styles'));
});
*/
gulp.task('sass', function () {
  return gulp.src('./bin/styles/main.scss')
    .pipe(sass({
        includePaths: neat.includePaths
    }).on('error', sass.logError))
    .pipe(prefixer(prefixerOptions))
    .pipe(minifyCSS({
        aggressiveMerging: true
    }))
   .pipe(rename('main.min.css'))
    .pipe(gulp.dest('./dist/styles/'));
});
