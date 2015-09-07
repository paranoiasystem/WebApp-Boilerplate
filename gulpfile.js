var gulp = require('gulp');
var fs = require('fs');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var processhtml = require('gulp-processhtml');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');

var input = {
	js: './js/',
	css: './css/'
};

var js = ['bower_components/angular/angular.js',
	'bower_components/angular-route/angular-route.js',
	'js/app.js',
	'js/factories/versionFactory.js.js',
	'js/controllers/homeController.js'];

var css = ['bower_components/normalize.css/normalize.css',
	'bower_components/lemonade/css/lemonade.css',
	'css/style.css'];

var output = {
	js: './dist/js/main.js',
	css: './dist/css/main.css'
};

var copy = {
	views: ['./views/**/*.html'],
	assets: ['./assets/**/*.*']
};

gulp.task('prepareindex', function () {
    return gulp.src('./index.html')
    .pipe(processhtml())
    .pipe(gulp.dest('dist/.'));
});

// Copy all other files to dist directly
gulp.task('copy', function() {
	gulp.src(copy.views)
	.pipe(gulp.dest('./dist/views'));

	gulp.src(copy.assets)
	.pipe(gulp.dest('./dist/assets'));
});

// Delete the dist directory
gulp.task('clean', function() {
 return gulp.src('dist')
 .pipe(clean());
});

gulp.task('minifycss', function () {
	return gulp.src(css)
	.pipe(concat(output.css))
	.pipe(uglifycss())
	.pipe(gulp.dest('.'));
});

gulp.task('minifyjs', function () {
	return gulp.src(js)
	.pipe(concat(output.js))
	.pipe(ngAnnotate())
	.pipe(uglify())
	.pipe(gulp.dest('.'));
});

gulp.task('build', function() {
	runSequence('clean', 'copy', 'prepareindex', 'minifycss', 'minifyjs');
});