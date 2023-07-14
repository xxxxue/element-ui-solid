/* eslint-disable */
"use strict";
const { series, src, dest } = require("gulp");
const gulpSass = require("gulp-sass");
const dartSass = require("sass");
const autoprefixer = require("gulp-autoprefixer");
const cssmin = require("gulp-cssmin");
const cleanCSS = require("gulp-clean-css");

let scssPath = "./src/components/theme-chalk";
let distPath = "./dist/css";
function compile() {
  const sass = gulpSass(dartSass);
  return (
    src(scssPath + "/*.scss")
      .pipe(sass.sync())
      .pipe(
        autoprefixer({
          // browsers: ['ie > 9', 'last 2 versions'],
          cascade: false,
        })
      )
      // .pipe(cssmin())
      .pipe(cleanCSS())
      .pipe(dest(distPath))
  );
}

function copyFont() {
  return src("./src/components/icon/fonts/**")
    .pipe(cssmin())
    .pipe(dest(distPath + "/fonts"));
}

function copyIconCss() {
  return src("./src/components/icon/icon.css")
    .pipe(cssmin())
    .pipe(dest(distPath));
}

exports.build = series( copyIconCss,copyFont);
