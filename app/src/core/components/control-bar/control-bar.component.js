"use strict";

angular.module("main")
	.component("controlBar", {
		transclude: true,
		template: `
			<div class="control-bar">
				<ng-transclude></ng-transclude>
			</div>
		`
	});
