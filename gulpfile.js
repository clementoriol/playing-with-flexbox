/*//////////////////////////////////////////////////////

  My Project
  Gulpfile
  v 0.0

  Author
  2015

///////////////////////////////////////////////////// */

/* =====================================================
    Config & Variables
=====================================================  */

/* -- Gulp Requires ---------------------------------  */

var gulp          = require('gulp'),
    jade          = require('gulp-jade'),
    del           = require('del'),
    runSequence   = require('run-sequence'),
    browserSync   = require('browser-sync'),
    reload        = browserSync.reload,
    sass          = require('gulp-sass'),
    autoprefixer  = require('gulp-autoprefixer');

/* -- Constants & Paths -----------------------------  */

// Paths
var paths = {
  dist: 'dist',
  views_src: 'src/views/**/*.jade',
  views_dest: 'dist/',
  css_src: 'src/styles/main.scss',
  css_watch: 'src/styles/**/*.scss',
  css_dest: 'dist/styles/'
}

/* =====================================================
    Single Tasks
=====================================================  */

/* -- BrowserSync Tasks -----------------------------  */
gulp.task('browserSync', function(){
  browserSync({
    server: {
      baseDir: paths.dist
    }
  })
});

gulp.task('bs-reload', ['build'], function () {
    browserSync.reload();
});

/* -- Clean task ------------------------------------  */
gulp.task('clean', function(){
  del(paths.dist + '/*');
});

/* -- Jade Task -------------------------------------  */
gulp.task('jade', function(){
  return gulp
    .src(paths.views_src)
    .pipe(jade({
      pretty:true
    }))
    .pipe(gulp.dest(paths.views_dest));
});

/* -- SCSS / CSS related Tasks --------------------  */
gulp.task('sass', function(){
  return gulp
    .src(paths.css_src)
    .pipe(sass({errLogToConsole: true}))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest(paths.css_dest));
});

/* -- Watch Task -----------------------------------  */
gulp.task('watch', function(taskEnd) {
  // Watch jade files
  gulp
    .watch(paths.views_src, ['build', 'bs-reload']);

  // Watch SCSS files
  gulp
    .watch(paths.css_watch, ['build', 'bs-reload']);

  taskEnd();
});

/* =====================================================
    Workflow Tasks
=====================================================  */

// Launching the server
gulp.task('server', function(taskEnd){
  runSequence(
    'clean',
    'build',
    'browserSync',
    'watch',
    taskEnd
  );
});

// Build Everything
gulp.task('build', function(taskEnd){
  runSequence(
    'clean',
    'sass',
    'jade',
    taskEnd
  );
});