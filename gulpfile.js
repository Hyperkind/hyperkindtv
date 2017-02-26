// gulp
var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var nodemon = require('gulp-nodemon');

gulp.task('connect', function () {
  nodemon({script: 'server.js'})
    .on('restart', function () {
      console.log('going to restart server!');
      setTimeout(function () {
        console.log('server restarted!');
      }, 500);
    });
});

gulp.task('copy-bower', function() {
  gulp.src('bower_components/**')
    .pipe(gulp.dest('public/bower_components'));
});

gulp.task('html', function () {
  gulp.src(['app/index.html', 'app/**/*.html'])
    .pipe(rename({dirname:''}))
    .pipe(gulp.dest('public'));
});

gulp.task('scss', function () {
  gulp.src('app/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('styles.css'))
    .pipe(gulp.dest('public/css'));
});

gulp.task('images', function() {
  gulp.src('app/assets/images/*')
  .pipe(gulp.dest('./public/images'));
});

gulp.task('js', function() {
  gulp.src(['app/modules/**/*-module.js', 'app/modules/**/*-controller.js', 'app/modules/*.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('public/js'));
});

gulp.task('watch', function () {
  gulp.watch('app/scss/**/*.scss', ['scss']);
  gulp.watch('app/modules/**/*.js', ['js']);
  gulp.watch('app/**/**/*.html', ['html']);
});

gulp.task('default', ['copy-bower', 'html', 'scss', 'images', 'js', 'connect', 'watch'], function() {
});
