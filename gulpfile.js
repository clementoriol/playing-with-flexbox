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
    reload        = browserSync.reload;

/* -- Constants & Paths -----------------------------  */

// Paths
var paths = {
  dist: 'dist',
  views_src: 'src/views/**/*.jade',
  views_dest: 'dist/'
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
gulp.task('build-jade', function(){
  return gulp
    .src(paths.views_src)
    .pipe(jade({
      pretty:true
    }))
    .pipe(gulp.dest(paths.views_dest));
});

/* -- Watch Task -----------------------------------  */
gulp.task('watch', function(taskEnd) {
  // Watch index file
  gulp
    .watch(paths.views_src, ['build', 'bs-reload']);

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
    'build-jade',
    taskEnd
  );
});