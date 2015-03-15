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
    jade          = require('gulp-jade');

/* -- Constants & Paths -----------------------------  */

// Paths
var paths = {
  views_src: 'src/views/**/*.jade',
  views_dest: 'dist/'
}
/* =====================================================
    Single Tasks
=====================================================  */

/* -- Jade Task -------------------------------------  */
gulp.task('build-jade', function(){
  return gulp
    .src(paths.views_src)
    .pipe(jade({
      pretty:true
    }))
    .pipe(gulp.dest(paths.views_dest));
});

/* =====================================================
    Workflow Tasks
=====================================================  */