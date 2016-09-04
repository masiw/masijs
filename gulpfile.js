var gulp = require('gulp')
  , eslint = require('gulp-eslint')
  , babel = require('gulp-babel')
  , concat = require('gulp-concat')
  , del = require('del')
  ,sourcemaps = require('gulp-sourcemaps')

gulp.task('test', () => {

  var mocha = require('gulp-mocha')
  
  gulp.src('./test/*.test.js', {read:false})
    .pipe(mocha({
        reporter: 'spec'
      , timeout: 2000
      , compilers: {
	js: babel
      }
    }))
})

gulp.task('lint', () => {

  return gulp.src(['src/**/*.js', '!node_modules/**'], {read:false})
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
  
})

gulp.task('build', () => {
  return gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat('masi.js'))
    .pipe(gulp.dest('dist'))
})

gulp.task('clean', () => {
  return del('dist')
})

gulp.task('default',
	  ['clean', 'lint', 'build', 'test'],
	  () => {
})
