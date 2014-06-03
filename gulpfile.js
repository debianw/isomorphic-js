/**
 *
 */

var gulp = require('gulp')
  , browserify = require('gulp-browserify')
  , uglify = require('gulp-uglify')
  , _if = require('gulp-if')
  , rename = require('gulp-rename')
  , react = require('gulp-react')
  , env = process.env.NODE_ENV || 'development';

/**
 * @task jsx
 */

gulp.task('jsx', function () {
  return gulp.src('lib/**/*.jsx')
    .pipe(react())
    .pipe(gulp.dest('lib'));
});

/**
 *
 */

gulp.task('client', function () {
  return gulp.src('client.js')

    // Browserify
    .pipe(browserify({
      debug: env === 'development',
      //transform: ['reactify']
    }))

    // Uglify
    .pipe(_if(env === 'production', uglify()))

    // Rename
    .pipe(rename('client.js'))

    // Destination
    .pipe(gulp.dest('build/'+env+'/js'));
});
