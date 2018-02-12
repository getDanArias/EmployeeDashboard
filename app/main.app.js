"use strict";

angular
	.module("main", [])
	.config(function ($compileProvider) {

		$compileProvider.debugInfoEnabled(false);

	});
