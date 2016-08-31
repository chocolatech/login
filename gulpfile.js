var gulp = require('gulp');
var livereload = require('gulp-livereload');
var runSequence = require('run-sequence');
var exec = require('child_process').exec;
var concat = require('gulp-concat');
var uglify= require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('default', function () {
  // place code for your default task here
});

gulp.task('js', function () {
  gulp.src('app/')
    .pipe(gulp.dest('app'))
    .pipe(livereload());
});

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch('app/', ['js']);
});

//join serve && dev
gulp.task('dev', function (cb) {
  runSequence(['minify:vendor.scripts', 'minify:scripts', 'serve', 'watch'], cb);
});

gulp.task('serve', function (cb) {
  exec('node server.js', function (err, stdout, stderr) {
    cb(err);
  });
});

gulp.task('minify:scripts', function(){
  gulp.src(['app/**/*.module.js', 'app/**/*.js'])
  .pipe(concat('scripts.js'))
  .pipe(gulp.dest('./dist/scripts'))
  .pipe(rename('scripts.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./dist/scripts'))
});

gulp.task('minify:vendor.scripts', function(){
  gulp.src('node_modules/**/*.min.js')
  .pipe(concat('vendor.scripts.js'))
  .pipe(gulp.dest('./dist/scripts'))
  .pipe(rename('vendor.scripts.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./dist/scripts'))
});