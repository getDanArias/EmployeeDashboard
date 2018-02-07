"use strict";

angular.module("main")
	.component("controlBarButton", {
		bindings: {
			title: "<",
			action: "<"
		},
		template: `
			<div class="control-bar-button" ng-click="$ctrl.action()">
				{{$ctrl.title}}
			</div>
		`
	});
