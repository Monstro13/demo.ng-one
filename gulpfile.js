var gulp = require('gulp'),
	connect = require('gulp-connect'),
	webpack = require('webpack'),
	webpackConfig = require("./webpack.config.js");

gulp.task('connect', function () {
	connect.server({
		root: 'app',
		livereload: true
	});
});

gulp.task('html', function () {
	gulp.src('./app/*.html')
		.pipe(connect.reload());
});

gulp.task('build-webpack', function () {
	var config = Object.create(webpackConfig);
	webpack(config).run(function (err, stats) {
		if (err) {
			console.log('Error', err);
		}
		else {
			console.log(stats.toString());
		}
	});
});

gulp.task('watch', function () {
	gulp.watch(['./app/*.html'], ['html']);
	gulp.watch(['./app/**/(*.js|!(*.core.js))'], ['build-webpack']);
});

gulp.task('default', ['build-webpack', 'connect', 'watch']);