var gulp = require("gulp");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");

gulp.task("optimize", function() {
	return gulp.src("src/angular-fallback-image.js")
		.pipe(uglify())
		.pipe(rename({
			extname: ".min.js"
		}))
		.pipe(gulp.dest("dist"));
});

gulp.task("copy", function() {
	return gulp.src("src/angular-fallback-image.js")
		.pipe(gulp.dest("dist/"));
});

gulp.task("build", ["optimize", "copy"]);