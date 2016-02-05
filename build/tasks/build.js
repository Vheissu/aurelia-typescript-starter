var gulp = require('gulp');
var runSequence = require('run-sequence');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var paths = require('../paths');
var assign = Object.assign || require('object.assign');
var notify = require("gulp-notify");
var typescript = require('gulp-tsb');

var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var typescriptCompiler = typescriptCompiler || null;

gulp.task('build-system', function() {
  if(!typescriptCompiler) {
    typescriptCompiler = typescript.create(require('../../tsconfig.json').compilerOptions);
  }

  return gulp.src(paths.dtsSrc.concat(paths.source))
    .pipe(plumber())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(typescriptCompiler())
    .pipe(sourcemaps.write({includeContent: true}))
    .pipe(gulp.dest(paths.output));
});

gulp.task('build-html', function() {
  return gulp.src(paths.html)
    .pipe(changed(paths.output, {extension: '.html'}))
    .pipe(gulp.dest(paths.output));
});

gulp.task('build-styles', function() {
    return gulp.src(paths.style)
    .pipe(plumber())
        .pipe(sourcemaps.init())
            .pipe(sass())
            .pipe(autoprefixer({
                browsers: ['> 5%', 'Explorer >= 10']
            }))
        .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.styleOutput));
});

gulp.task('build-images', function() {
    return gulp.src(paths.image)
        .pipe(gulp.dest(paths.imageOutput));
});

gulp.task('build-fonts', function() {
    return gulp.src(paths.font)
        .pipe(gulp.dest(paths.fontOutput));
});

gulp.task('build', function(callback) {
  return runSequence(
    'clean',
    ['build-system', 'build-html', 'build-styles', 'build-images', 'build-fonts'],
    callback
  );
});
