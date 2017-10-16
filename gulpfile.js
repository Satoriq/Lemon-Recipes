var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync'),
	autoprefixer = require('gulp-autoprefixer')

gulp.task('sass', function(){
	return gulp.src('src/sass/*.sass')
	.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
	.pipe(autoprefixer(['last 15 versions', '>1%', 'ie 11'] , { cascade:true } ))
	.pipe(gulp.dest('src/css'))
	.pipe(browserSync.reload({stream:true}))
});

gulp.task('browser-sync', function() {
	browserSync({
	 server: {
	 	baseDir:'src'
	 },
	 notify:false
	});
});

gulp.task('watch', ['browser-sync', 'sass'], function(){
	gulp.watch('src/sass/*.sass', ['sass']);
	gulp.watch('src/*.html', browserSync.reload);
	gulp.watch('src/js/*.js', browserSync.reload);

});