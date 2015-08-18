var gulp = require('gulp');
var fs = require('fs');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var webserver = require('gulp-webserver');

var input = {
	js: 'js/',
	css: 'css/'
};

var output = {
	js: 'js/main.js',
	css: 'css/main.css'
};

gulp.task('server', function() {
	gulp.src('.')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: 'index.html'
    }));
});

gulp.task('default', ['server'], function() {
	gulp.watch(input.js + '/**/*.js', ['minifyjs']);
	gulp.watch(input.css + '/**/*.css', ['minifycss']);
});

gulp.task('cleanjs', function() {
	try {
		fs.unlinkSync(output.js)
	} catch (e) {
		if (e.code != 'ENOENT') throw e;
	}
});

gulp.task('cleancss', function() {
	try {
		fs.unlinkSync(output.css)
	} catch (e) {
		if (e.code != 'ENOENT') throw e;
	}
});

gulp.task('minifycss', ['cleancss'], function () {
	return gulp.src(input.css + '/**/*.css')
	.pipe(concat(output.css))
	.pipe(uglifycss())
	.pipe(gulp.dest('.'));
});

gulp.task('minifyjs', ['cleanjs'], function () {
	return gulp.src(input.js + '/**/*.js')
	.pipe(concat(output.js))
	.pipe(ngAnnotate())
	.pipe(uglify())
	.pipe(gulp.dest('.'));
});