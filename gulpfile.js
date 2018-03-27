// Include gulp
var gulp = require('gulp');
 // Include plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-ruby-sass');
var cleanCss = require('gulp-clean-css');
 // Concatenate & Minify JS & CSS Files
gulp.task('scripts', function() {
    return gulp.src(['src/js/main/*.js','src/js/plugin/*.js'])
      .pipe(concat('main.js'))
	  .pipe(uglify())
	  .pipe(rename({suffix:'.min'}))
      .pipe(gulp.dest('build/js'));
});

// CSS
/*gulp.task('sass',function() {
	return sass('src/scss/first.scss',{style:'compressed'})
		.pipe(rename({suffix:'min'}))
		.pipe(gulp.dest('build/css'));
	});
*/

// CSS
gulp.task('minify-css', function() {
	return gulp.src('src/css/*.css')
		.pipe(cleanCss({compatability: 'ie8'}))
		.pipe(concat('main.css'))
		.pipe(rename({suffix:'.min'}))
		.pipe(gulp.dest('build/css'));
});

//Watch

gulp.task('watch', function() {
	gulp.watch('src/js/**/*.js', ['scripts']);
	gulp.watch('src/css/**/*.css', ['minify-css']);
});
	

 // Default Task
gulp.task('default', ['scripts','minify-css','watch']);