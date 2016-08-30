var gulp = require('gulp');
var livereload = require('gulp-livereload');
var runSequence = require('run-sequence');
var exec = require('child_process').exec;

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
  runSequence(['serve', 'watch'], cb);
});

gulp.task('serve', function (cb) {
  exec('node server.js', function (err, stdout, stderr) {
    cb(err);
  });
})