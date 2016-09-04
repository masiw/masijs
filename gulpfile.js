let gulp = require('gulp')
let mocha = require('gulp-mocha')
let eslint = require('gulp-eslint')
let babel = require('gulp-babel')
let rename = require('gulp-rename')
let concat = require('gulp-concat')
let copy = require('gulp-contrib-copy')
let del = require('del')

gulp.task('buildTests', () => {
  return gulp.src('./test/*.js')
    .pipe(babel({
      presets: ['latest']
    }))
    .pipe(concat('tests.js'))
    .pipe(gulp.dest('./build-tests/'))
})
	  
gulp.task('test', ['buildTests'], () => {
  gulp.src('./build-tests/tests.js', {read:false})
    .pipe(mocha({
      reporter: 'spec',
      timeout: 2000
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
    .pipe(babel({
      presets: ['latest']
    }))
    .pipe(rename('masi.js'))
    .pipe(gulp.dest('./build/'))
})

gulp.task('copy', () => {
  return gulp.src('build/*.js')
    .pipe(copy())
    .pipe(gulp.dest('./dist/'))

})

gulp.task('clean-build', () => {
  return del(['build', 'build-tests'])
})

gulp.task('clean', () => {
  return del('dist')
})

gulp.task('default',
	  ['clean', 'lint', 'build', 'test', 'copy'],
	  () => {
	      return del(['build', 'build-tests']) 
})
