'use strict'

import gulp from 'gulp';
import connect from 'gulp-connect'; //Runs a local dev server
import open from 'gulp-open'; //Open a URL in a web browser
import browserify from 'browserify'; //Open a URL in a web browser
import reactify from 'reactify'; //Open a URL in a web browser
import source from 'vinyl-source-stream'; //Open a URL in a web browser
import concat from 'gulp-concat'; //Open a URL in a web browser
import babelify from 'babelify'; //Open a URL in a web browser

let config = {
  port: 3001,
  devBaseUrl: 'http://localhost',
  paths: {
    html: './src/*.html',
    js: './src/**/*.js',
    css: [
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
    ],
    dist: './dist',
    mainJs: './src/main.js',
    images: './src/images/*'
  }
}

//Start a local dev server
gulp.task('connect', () => {
  connect.server({
    root: ['dist'],
    port: config.port,
    base : config.devBaseUrl,
    livereload: true
  })
});

gulp.task('open', ['connect'], () => {
  gulp.src('dist/index.html')
    .pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/' }));
})

gulp.task('html', () => {
  gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist))
    .pipe(connect.reload());
});

gulp.task('js', () => {
  browserify(config.paths.mainJs)
    .transform("babelify", {presets: ["es2015", "react"]})
    .transform(reactify)
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.paths.dist + '/scripts'))
    .pipe(connect.reload());
})

gulp.task('css', () => {
  gulp.src(config.paths.css)
  .pipe(concat('bundle.css'))
  .pipe(gulp.dest(config.paths.dist + '/css'));
})

gulp.task('images', () => {
  gulp.src(config.paths.images)
    .pipe(gulp.dest(config.paths.dist + '/images'))
    .pipe(connect.reload());
})

gulp.task('watch', () => {
  gulp.watch(config.paths.html, ['dist']);
  gulp.watch(config.paths.js, ['js']);
});

gulp.task('default', ['html', 'js', 'css', 'images', 'open', 'watch']);
