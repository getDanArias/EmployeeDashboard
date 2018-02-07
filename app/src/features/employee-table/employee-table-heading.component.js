"use strict";

angular.module("main")
	.component("employeeTableHeadings", {
		bindings: {
			sortTable: "<",
			sortedColumn: "<",
			sortOrder: "<"
		},
		controller: function () {
			let self = this;

			self.headings = [
				"Name",
				"Job Title",
				"Tenure",
				"Gender"
			];

			self.sortClasses = {
				none: ["fas", "fa-sort"],
				asc: ["fas", "fa-sort-up"],
				desc: ["fas", "fa-sort-down"],
			};

			self.sortClass = self.sortClasses.none;
		},
		template: `
			<div class="employeeTableHeadings">
				<div 
				ng-repeat="heading in $ctrl.headings"
				class="employeeTableCell">
					{{heading}}
					<div class="sort-arrows" ng-click="$ctrl.sortTable(heading)">
						<i ng-class="heading === $ctrl.sortedColumn ?
							$ctrl.sortOrder ? $ctrl.sortClasses.asc : $ctrl.sortClasses.desc :
							$ctrl.sortClass"
						></i>
					</div>
				</div>
			</div>
		`
	});