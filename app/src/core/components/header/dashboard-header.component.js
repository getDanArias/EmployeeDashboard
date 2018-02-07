"use strict";

angular.module("main")
	.component("dashboardHeader", {
		bindings: {title: "<"},
		template: `
			<div class="dashboard-header">
				{{ $ctrl.title }}
			</div>
		`
	});
