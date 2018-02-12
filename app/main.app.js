"use strict";

angular
	.module("main", [])
	.config(["$compileProvider", function ($compileProvider) {

		$compileProvider.debugInfoEnabled(false);

	}]);
