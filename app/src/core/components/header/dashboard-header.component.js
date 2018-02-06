"use strict";

console.log("is this working?");

angular.module("main")
	.component("dashboardHeader", {
		bindings: {
			title: "<"
		},
		template: `
			<div>
				{{ $ctrl.title }}
			</div>
		`
	});