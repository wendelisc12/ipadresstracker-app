const gulp = require("gulp")
const {task} = require("gulp")
const less = require("gulp-less")
const sourcemaps = require("gulp-sourcemaps")

task("less", ()=>{
    return gulp.src("src/styles/*.less")
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(sourcemaps.write("maps"))
    .pipe(gulp.dest("build/styles"))
})

task("default", ()=> {
    return gulp.watch("src/styles/*.less", {ignoreInitial: false}, gulp.series("less"))
})