var gulp = require('gulp');
var livereload = require('gulp-livereload');
var runSequence = require('run-sequence');
var exec = require('child_process').exec;
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var inject = require('gulp-inject');

gulp.task('default', function () {
});

gulp.task('js', function () {
  gulp.src(['app/', 'api/'])
    .pipe(livereload());
});

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch(['app/', 'api/'], ['js']);
});

gulp.task('dev', function (cb) {
  runSequence(['serve','watch'], cb);
});
gulp.task('prod', function (cb) {
  runSequence(['minify:vendor.styles', 'minify:vendor.scripts', 'minify:scripts'], cb);
});

gulp.task('serve', function (cb) {
  exec('node server.js', function (err, stdout, stderr) {
    cb(err);
  });
});
// gulp.task('index', function () {
//   var target = gulp.src('app/index.html');
//   var sources = gulp.src([

//     "node_modules/angular/angular.min.js",
//     "node_modules/angular-route/angular-route.min.js",
//     "node_modules/jquery/dist/jquery.min.js",
//     "node_modules/bootstrap/dist/js/bootstrap.min.js",
//     "app/app.module.js",
//     "app/app.config.js",
//     "app/app.controller.js",
//     "app/login-screen/login-screen.module.js",
//     "app/login-screen/login-screen.component.js",
//     "app/navbar/navbar.module.js",
//     "app/navbar/navbar.component.js",
//     "app/dashboard/dashboard.module.js",
//     "app/dashboard/dashboard.component.js",
//     "app/core/core.module.js",
//     "app/core/login.service.js",
//     "app/error500/error500.module.js",
//     "app/error500/error500.component.js",
//     "node_modules/bootstrap/dist/css/bootstrap-theme.min.css",
//     "node_modules/bootstrap/dist/css/bootstrap.min.css",
//     "app/app.css"
//   ], { read: false });

//   return target.pipe(inject(sources))
//     .pipe(gulp.dest('app'));
// });

gulp.task('minify:scripts', function () {
  gulp.src(['app/**/*.module.js', 'app/**/*.js'])
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('./dist/scripts'))
    .pipe(rename('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/scripts'));
});

gulp.task('minify:vendor.scripts', function () {
  gulp.src('node_modules/**/*.min.js')
    .pipe(concat('vendor.scripts.js'))
    .pipe(gulp.dest('./dist/scripts'))
    .pipe(rename('vendor.scripts.min.js'));
});

gulp.task('minify:vendor.styles', function () {
  gulp.src('node_modules/**/*.css')
    .pipe(concat("vendor.styles.css"))
    .pipe(gulp.dest('./dist/styles'));
});