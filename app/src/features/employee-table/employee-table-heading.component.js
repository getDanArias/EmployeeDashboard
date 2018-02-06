"use strict";

angular.module("main")
	.component("employeeTableHeadings", {
		bindings: {
			sortTable: "<"
		},
		controller: function () {
			let self = this;

			self.headings = [
				"Name",
				"Job Title",
				"Tenure",
				"Gender"
			];
		},
		template: `
			<div class="employeeTableHeadings">
				<div 
				ng-repeat="heading in $ctrl.headings"
				ng-click="$ctrl.sortTable(heading)" 
				class="employeeTableCell">
					{{heading}}
				</div>
			</div>
		`
	});